import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jg2okv2kv {
  d: path("M8.5 8.25V6.5a3.5 3.5 0 0 1 7 0v1.75m-.69 5.13a3.25 3.25 0 0 0-5.62 0m5.62 0v-2.13m0 2.13h-2.1m-3.52 3.24a3.25 3.25 0 0 0 5.62 0m-5.62 0v2.13m0-2.13h2.1");
}

.tqvn4eb2x {
  d: path("M5.75 8.25h14.5l-.15 1.99l-.7 9.02l-.15 1.99H4.75l-.15-1.99l-.7-9.02l-.15-1.99z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tqvn4eb2x"/><path class="jg2okv2kv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:reusable-bag-sharp"} {...others} />);
}

export default Component;
