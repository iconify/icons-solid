import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8p2edctq {
  d: path("m9 6 6 6h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jn4ih6bid {
  fill: currentColor;
  d: path("m3 12 6 -6h6l6 6 -6 6H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kzxwn_jgc {
  d: path("M15 12v6");
}

.ujw9c-ben {
  d: path("m3 12 6 -6h6l6 6 -6 6H9Z");
}
</style><g class="hntgybcog"><path class="jn4ih6bid"/><path class="ujw9c-ben"/><path class="c8p2edctq"/><path class="kzxwn_jgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:rock-duotone-thin"} {...others} />);
}

export default Component;
