import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.knyx3mo7h {
  fill: var(--svg-color--eee, #EEE);
  cx: 13.5px;
  cy: 18px;
  r: 8px;
}

.q0s_-hoas {
  fill: var(--svg-color--d00c33, #D00C33);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0v9z");
}

.qh0ns0bse {
  fill: var(--svg-color--eee, #EEE);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z");
}

.vb9xu-fyc {
  fill: var(--svg-color--d00c33, #D00C33);
  d: path("M13.5 10a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z");
}
</style><path class="q0s_-hoas"/><path class="qh0ns0bse"/><circle class="knyx3mo7h"/><path class="vb9xu-fyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-for-greenland"} {...others} />);
}

export default Component;
