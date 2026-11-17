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

.q_a5zcbnk {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.ul4lsxb1v {
  stroke-opacity: 0.4;
  d: path("M16 8c-3.296-2.472-8-.12-8 4s4.704 6.472 8 4m-9-6h6m-6 4h6");
}
</style><g class="nrj6p8qat"><path class="ul4lsxb1v"/><path class="q_a5zcbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-currency-euro-duocolor"} {...others} />);
}

export default Component;
