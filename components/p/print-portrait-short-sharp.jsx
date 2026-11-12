import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vudhpubaw {
  fill: currentColor;
  d: path("m3.296 16.192l-.525-.667q1.221-2.761 2.062-5.632T5.752 4h1.877V3H9.32v1h5.102V3h1.693v1h1.096l.769.77q-.148 3.051-1.185 5.894q-1.036 2.842-2.484 5.528zM5.764 20v-2.846h9.188q.921-1.706 1.66-3.428t1.369-3.428V20z");
}
</style><path class="vudhpubaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:print-portrait-short-sharp"} {...others} />);
}

export default Component;
