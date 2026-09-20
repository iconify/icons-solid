import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eqtg3_b2j {
  fill: currentColor;
  d: path("M2 20v-2h18V4h2v16zm8-4v-6h8v6z");
}
</style><path class="eqtg3_b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-small-outline-sharp"} {...others} />);
}

export default Component;
