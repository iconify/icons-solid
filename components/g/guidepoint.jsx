import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ra4jogbez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 12C16 10.34 17.3432 9 19 9C20.6568 9 22 10.34 22 12C22 13.66 20.6568 15 19 15C17.3432 15 16 13.66 16 12ZM16 12H8M8 12C8 13.66 6.6568 15 5 15C3.3432 15 2 13.66 2 12C2 10.34 3.3432 9 5 9C6.6568 9 8 10.34 8 12Z");
}
</style><path class="ra4jogbez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:guidepoint"} {...others} />);
}

export default Component;
