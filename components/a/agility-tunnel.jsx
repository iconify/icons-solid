import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-bvkjb9c {
  d: path("M5 6.75q7-3 14 0m-14 12q7-3 14 0m0-12a2.5 6 0 0 1 0 12");
}

.dns7uqbmn {
  d: path("M2.5 12.75a2.5 6 0 1 0 5 0a2.5 6 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n81iwfhmj {
  d: path("M12 5.25a2.5 6 0 0 1 0 12");
}
</style><g class="hntgybcog"><path class="dns7uqbmn"/><path class="b-bvkjb9c"/><path class="n81iwfhmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:agility-tunnel"} {...others} />);
}

export default Component;
