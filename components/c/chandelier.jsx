import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b89r7bbcy {
  d: path("M2.25 9.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m15 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-7.5 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k7xna-b7z {
  d: path("M9 2.5h6m-3 0V15m-7.5-3.5v.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-.5");
}
</style><g class="hntgybcog"><path class="k7xna-b7z"/><path class="b89r7bbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chandelier"} {...others} />);
}

export default Component;
