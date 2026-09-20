import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qtz4vobwn {
  fill: var(--svg-color--6286ff, #6286ff);
  d: path("M21 3H3v18h18z");
}

.zayvkm-ap {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.12 8.412a.572.572 0 0 1-.733.607l-3.411-1.042a.57.57 0 0 0-.722.412l-.857 3.593a.57.57 0 0 1-.808.379L3 8.113v7.069l11.815 3.36a.57.57 0 0 0 .726-.547l.03-6.995a.57.57 0 0 1 .769-.532l2.578.959a.57.57 0 0 0 .76-.64L18.221 3h-.688z");
}
</style><g class="ft5dv1b6b"><path class="qtz4vobwn"/><path class="zayvkm-ap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:wallet-3"} {...others} />);
}

export default Component;
