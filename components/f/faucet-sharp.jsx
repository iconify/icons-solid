import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t92aii9xn {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 19.5h.01");
}

.txvwqo0oj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75h15V15h-4v-2.5h-11Zm5.25 0v-3.5m-2.5 0h5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="txvwqo0oj"/><path class="t92aii9xn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:faucet-sharp"} {...others} />);
}

export default Component;
