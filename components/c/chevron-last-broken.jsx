import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_uf8kb5f {
  stroke-linejoin: round;
  d: path("M12 10.25L13.5 12L7.49997 19");
}

.nqop7gbey {
  d: path("M16.5 5L16.5 19.0004");
}

.z49mobc8s {
  d: path("M8.99997 6.75L7.49997 5");
}
</style><g class="ipq1z-bjh"><path class="m_uf8kb5f"/><path class="z49mobc8s"/><path class="nqop7gbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevron-last-broken"} {...others} />);
}

export default Component;
