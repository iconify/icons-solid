import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d96nfgblu {
  d: path("m3 11l9 6l9-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-a-6_beh {
  d: path("M3 11v8.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11");
}

.nlm_d8byv {
  d: path("M6 13V4.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V13M9 5.75h6M9 8.5h6m-6 2.75h4");
}
</style><g class="hntgybcog"><path class="i-a-6_beh"/><path class="d96nfgblu"/><path class="nlm_d8byv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:audit-management-letter"} {...others} />);
}

export default Component;
