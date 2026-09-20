import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":321};
const content = `<style>.szzvwjxbw {
  fill: var(--svg-color--211e1e, #211e1e);
  d: path("M192.001 64.072H63.999v192.214h128.002zM256 320.357H0V0h256z");
}

.tc6a7cgjq {
  fill: var(--svg-color--cfcecd, #cfcecd);
  d: path("M191.985 256.287H63.983V128.144h128.002z");
}
</style><path class="tc6a7cgjq"/><path class="szzvwjxbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:opencode-icon"} {...others} />);
}

export default Component;
