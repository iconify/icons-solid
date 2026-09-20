import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2el1cxqo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 9 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ih7u9nbbo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 20H10V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mwaecstwf {
  d: path("M20 20H10V4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p1z08ccdv {
  d: path("m5 9 5 -5 5 5");
}
</style><g class="nrj6p8qat"><path class="ih7u9nbbo"/><path class="a2el1cxqo"/><path class="mwaecstwf"/><path class="p1z08ccdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corner-left-up-duotone-regular"} {...others} />);
}

export default Component;
