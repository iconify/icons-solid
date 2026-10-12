import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmq7ty1vb {
  d: path("M7 4.75C8.5 12.25 11.5 16 20.25 16.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qmvt8fbnf {
  d: path("M3.25 3.25v17.5h17.5");
}
</style><g class="hntgybcog"><path class="qmvt8fbnf"/><path class="dmq7ty1vb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:loss-curve"} {...others} />);
}

export default Component;
