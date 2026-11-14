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

.n6os-bs9h {
  d: path("M6.5 7v8L4 21.5M6.5 15L9 21.5m-2.5-11l3-2l9.5-6m0 0c2.5 3.5 2.5 8.5.5 12M12 18q2.25-1.5 4.5 0t4.5 0");
}

.y5j8snzcg {
  d: path("M4.25 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="y5j8snzcg"/><path class="n6os-bs9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fly-fisher"} {...others} />);
}

export default Component;
