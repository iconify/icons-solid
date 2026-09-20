import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bm7ndbczt {
  fill: currentColor;
  d: path("M3 9V3h2v3.35Q6.25 4.8 8.063 3.9T12 3q2.95 0 5.263 1.675T20.5 9h-2.175q-.85-1.8-2.525-2.9T12 5q-1.425 0-2.688.525T7.1 7H9v2zm3 9h12l-3.75-5l-3 4L9 14zm-3 4V12h2v8h14v-8h2v10z");
}
</style><path class="bm7ndbczt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:reset-image-sharp"} {...others} />);
}

export default Component;
