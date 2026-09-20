import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a51oytv8p {
  d: path("M13 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.advi1_bna {
  fill: currentColor;
  d: path("M13 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.au87n5bnx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 15.5a4.5 4.5 0 0 1 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cr9y57byp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 6v9.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jz3tfobnp {
  d: path("M15 6v9.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.op8_xbqqk {
  d: path("M6 11v4.5");
}

.ur5cuwbiy {
  d: path("M15 15.5a4.5 4.5 0 0 1 -9 0");
}

.yvz7d4f2x {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 11v4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="advi1_bna"/><path class="cr9y57byp"/><path class="au87n5bnx"/><path class="yvz7d4f2x"/><path class="a51oytv8p"/><path class="jz3tfobnp"/><path class="ur5cuwbiy"/><path class="op8_xbqqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:phishing-duotone-regular"} {...others} />);
}

export default Component;
