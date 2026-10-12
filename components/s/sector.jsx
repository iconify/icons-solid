import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d145upjsy {
  d: path("M11.28 19.48L3.54 8.42q-.72-1.02.34-1.71a16 16 0 0 1 16.24 0q1.06.69.34 1.71l-7.74 11.06q-.72 1.02-1.44 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnvabvbzg {
  d: path("M9.13 16.4a5 5 0 0 1 5.74 0");
}
</style><g class="hntgybcog"><path class="d145upjsy"/><path class="wnvabvbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sector"} {...others} />);
}

export default Component;
