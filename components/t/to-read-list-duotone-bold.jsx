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

.odjrxobua {
  fill: currentColor;
  d: path("M3 6h14v4H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u1nlm01-r {
  d: path("M3 6h14v4H3Z");
}
</style><g class="s0phu2bbs"><path class="odjrxobua"/><path class="a8ujocbwb"/><path class="u1nlm01-r"/><path class="fqbma974b"/><path class="eq1ozwbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:to-read-list-duotone-bold"} {...others} />);
}

export default Component;
