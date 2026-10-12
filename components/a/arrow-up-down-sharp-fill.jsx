import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lvilpbbnp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 2L17 21M21.2929 16.7071L17 21L12.7071 16.7071M7 22L7 3M2.7071 7.2929L7 3L11.2929 7.2929");
}
</style><path class="lvilpbbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-down-sharp-fill"} {...others} />);
}

export default Component;
