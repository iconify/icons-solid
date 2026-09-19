import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.kfs7nwd-w {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4bd37b, #4bd37b);
}

.xgrwu_xlq {
  fill: var(--svg-color--fff, #fff);
  d: path("M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z");
}
</style><circle class="kfs7nwd-w"/><path class="xgrwu_xlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:check-mark-button"} {...others} />);
}

export default Component;
