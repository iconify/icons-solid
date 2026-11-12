import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8zbmn69e {
  d: path("M16 7L16 17");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.fzrw0bbji {
  d: path("M8 7L8 17");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jy2u6qbys {
  d: path("M12 4L12 20");
}

.k2-30wbbi {
  d: path("M4 11L4 13");
}

.pz2mgtkjp {
  d: path("M20 11L20 13");
}
</style><g class="ipq1z-bjh"><path class="jy2u6qbys"/><path class="a8zbmn69e"/><path class="fzrw0bbji"/><path class="pz2mgtkjp"/><path class="k2-30wbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-line-duotone"} {...others} />);
}

export default Component;
