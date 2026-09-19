import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.euu415bms {
  fill: currentColor;
  d: path("M62 32L32 62L2.001 32l30-30z");
}
</style><path class="euu415bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:diamond-suit"} {...others} />);
}

export default Component;
