import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pnpfqrbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M9 20v-5.078a4 4 0 0 1 1.501-3.123l1-.8a4 4 0 0 1 4.998 0l1 .8A4 4 0 0 1 19 14.923V20m-7-9.4V4H9a4 4 0 0 0-4 4v12");
}
</style><path class="pnpfqrbfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-1-round"} {...others} />);
}

export default Component;
