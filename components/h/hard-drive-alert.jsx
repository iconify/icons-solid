import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fl_uumxlo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 12h6");
}

.mtohnxbsi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 12h.01");
}

.rjannr7ij {
  width: 18.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="rjannr7ij"/><path class="fl_uumxlo"/><path class="mtohnxbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hard-drive-alert"} {...others} />);
}

export default Component;
