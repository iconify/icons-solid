import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_9d4tbof {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 10.75h.01m4.99 5h.01");
}

.qhti0ubqs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4m-2 0v2.5m-2.5 10.5l5-5");
}

.uk-2p8vqh {
  cx: 12px;
  cy: 13.25px;
  r: 8px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="uk-2p8vqh"/><path class="qhti0ubqs"/><path class="h_9d4tbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:countdown-sale-sharp"} {...others} />);
}

export default Component;
