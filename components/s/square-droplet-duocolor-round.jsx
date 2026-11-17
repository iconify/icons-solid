import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zlkd-2bms {
  stroke-opacity: 0.4;
  d: path("M12 8s-3.111 2.222-3.111 4.889a3.111 3.111 0 1 0 6.222 0C15.111 10.222 12 8 12 8");
}

.zxk7_zbjo {
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}
</style><g class="nrj6p8qat"><path class="zlkd-2bms"/><path class="zxk7_zbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-droplet-duocolor-round"} {...others} />);
}

export default Component;
