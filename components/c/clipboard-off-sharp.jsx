import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iss2zcmcq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L4 22L20 22L20 20M20 15.3431L20 14.3431L20 4L17 4M6.6569 2L7.6569 2L17 2L17 7L12.6569 7L11.6569 7M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="iss2zcmcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clipboard-off-sharp"} {...others} />);
}

export default Component;
