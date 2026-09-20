import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbye9-bll {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 8H9v14h10V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fh4c1v02p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 2H6v14h10V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i5d2grbwo {
  d: path("M13 2H6v14h10V5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s27ukbqxc {
  d: path("M16 8H9v14h10V11");
}
</style><g class="nrj6p8qat"><path class="fh4c1v02p"/><path class="bbye9-bll"/><path class="i5d2grbwo"/><path class="s27ukbqxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corpus-duotone-regular"} {...others} />);
}

export default Component;
