import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tafg0ab_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h3c.64 0 1.36.36 2 1l3 3c.64.64 1 1.36 1 2v6c0 .64-.36 1.36-1 2l-3 3c-.64.64-1.36 1-2 1H9c-.64 0-1.36-.36-2-1l-3-3c-.64-.64-1-1.36-1-2V9c0-.64.36-1.36 1-2l3-3c.64-.64 1.36-1 2-1zm0 5h.01M12 11v5");
}
</style><path class="tafg0ab_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:octagon-info"} {...others} />);
}

export default Component;
