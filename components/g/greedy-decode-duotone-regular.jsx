import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6cqo_biq {
  d: path("m6 12 5 -5");
}

.gorvssbqo {
  d: path("M17.5 9.5 20 12l-2.5 2.5");
}

.kliut9bht {
  d: path("m10 12 5 5");
}

.leydxglwc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h15.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qx70o98vb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m6 12 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vlvmdnbxo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17.5 9.5 20 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yfgjr0crm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 12 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ytqok-bxz {
  d: path("M2 12h15.5");
}
</style><g class="nrj6p8qat"><path class="leydxglwc"/><path class="vlvmdnbxo"/><path class="qx70o98vb"/><path class="yfgjr0crm"/><path class="ytqok-bxz"/><path class="gorvssbqo"/><path class="e6cqo_biq"/><path class="kliut9bht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:greedy-decode-duotone-regular"} {...others} />);
}

export default Component;
