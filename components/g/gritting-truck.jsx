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

.k0ioybche {
  d: path("M7.5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-12.5-8h.01m-.01 3.25h.01M3.5 15h.01");
}

.k9s68p4-y {
  d: path("M6.5 14.5V6h8v3h4l3 3v2.5Z");
}
</style><g class="hntgybcog"><path class="k9s68p4-y"/><path class="k0ioybche"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gritting-truck"} {...others} />);
}

export default Component;
