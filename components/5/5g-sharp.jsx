import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5nsw9bgs {
  fill: currentColor;
  d: path("M3 17v-2h5v-2H3V7h7v2H5v2h5v6zm18-6v6h-9V7h9v2h-7v6h5v-2h-2.5v-2z");
}
</style><path class="o5nsw9bgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:5g-sharp"} {...others} />);
}

export default Component;
