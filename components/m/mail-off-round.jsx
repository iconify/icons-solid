import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.krqua0b9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H7a4 4 0 0 1-4-4V9a4 4 0 0 1 2.354-3.646M11 5h6a4 4 0 0 1 4 4v6m-2.354 3.646A4 4 0 0 1 17 19h-5m5-9c.002-.002-.002.002 0 0l3-3M2 2l20 20");
}
</style><path class="krqua0b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-off-round"} {...others} />);
}

export default Component;
