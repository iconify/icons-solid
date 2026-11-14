import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m99vsbcwd {
  d: path("M9.5 21v-3h5v3m-4.75-8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 6.5v4.25");
}

.of6ltbc-d {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M4.5 11v10h15V11");
}
</style><g class="hntgybcog"><path class="of6ltbc-d"/><path class="m99vsbcwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crypto-merchant"} {...others} />);
}

export default Component;
