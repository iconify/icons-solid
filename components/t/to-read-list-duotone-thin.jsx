import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8ujocbwb {
  fill: currentColor;
  d: path("M6 13h14v4H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.eq1ozwbjq {
  d: path("M3 21h14");
}

.fqbma974b {
  d: path("M6 13h14v4H6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.odjrxobua {
  fill: currentColor;
  d: path("M3 6h14v4H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u1nlm01-r {
  d: path("M3 6h14v4H3Z");
}
</style><g class="hntgybcog"><path class="odjrxobua"/><path class="a8ujocbwb"/><path class="u1nlm01-r"/><path class="fqbma974b"/><path class="eq1ozwbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:to-read-list-duotone-thin"} {...others} />);
}

export default Component;
