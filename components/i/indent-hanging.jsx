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

.ur-gck66t {
  d: path("M3.5 4.5h17m-9 5h9m-9 5h9m-9 5h6M4.5 8v4h4");
}

.zuep11sta {
  d: path("M6.75 10.25L8.5 12l-1.75 1.75");
}
</style><g class="hntgybcog"><path class="ur-gck66t"/><path class="zuep11sta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:indent-hanging"} {...others} />);
}

export default Component;
