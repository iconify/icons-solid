import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ef_kgbbrh {
  fill: var(--svg-color--ec793e, #ec793e);
  d: path("M5.4 3h4.8v18H5.4z");
}

.ft5dv1b6b {
  fill: none;
}

.i5b-c6tma {
  fill: var(--svg-color--0d1122, #0d1122);
  d: path("M18.6 3h-7.8l7.8 7.2zm0 18v-7.2L10.8 21z");
}
</style><g class="ft5dv1b6b"><path class="ef_kgbbrh"/><path class="i5b-c6tma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:exd"} {...others} />);
}

export default Component;
