import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2ac16b7a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 18H17.999M17.999 18H23M17.999 18L17.997 23M17.999 18L18 13M1 6H11M4.703 22.43L19.3 1.57");
}
</style><path class="d2ac16b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:minus-forward-slash-plus-sharp-fill"} {...others} />);
}

export default Component;
