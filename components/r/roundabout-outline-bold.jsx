import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c438ceftc {
  d: path("M12 17v5");
}

.es-ot3p7v {
  d: path("M18 11h4");
}

.g1du9hbaz {
  d: path("M6 11a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.rvoc0ob8r {
  d: path("M2 11h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="g1du9hbaz"/><path class="c438ceftc"/><path class="rvoc0ob8r"/><path class="es-ot3p7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:roundabout-outline-bold"} {...others} />);
}

export default Component;
