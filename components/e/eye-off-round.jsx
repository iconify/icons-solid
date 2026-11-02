import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mygkryb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 17c-1.425.797-3.297 1-5 1a9.75 9.75 0 0 1-9-6c.859-2.061 2.132-3.955 4-5m5-1a9.75 9.75 0 0 1 9 6c-.288.69-.576 1.408-1 2m-9-3c-.362.362-1 .448-1 1a2 2 0 0 0 2 2c.552 0 .638-.638 1-1M2 2l20 20");
}
</style><path class="mygkryb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eye-off-round"} {...others} />);
}

export default Component;
