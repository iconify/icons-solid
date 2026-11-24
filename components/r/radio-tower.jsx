import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.krqw1hboi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 13l-4 8m4-8l4 8M12 9h.01M15 6a4.243 4.243 0 0 1 0 6m3-9a8.485 8.485 0 0 1 0 12m-9-3a4.243 4.243 0 0 1 0-6m-3 9A8.485 8.485 0 0 1 6 3");
}
</style><path class="krqw1hboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radio-tower"} {...others} />);
}

export default Component;
