import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rxvnnxqwu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 18H23M1 6H5.999M5.999 6H11M5.999 6L5.997 11M5.999 6L6 1M4.701 22.43L19.299 1.57");
}
</style><path class="rxvnnxqwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plus-forward-slash-minus-sharp"} {...others} />);
}

export default Component;
