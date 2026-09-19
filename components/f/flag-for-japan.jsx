import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.do2tny6mn {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--f5f5f5, #f5f5f5);
}

.koquvbcvx {
  cx: 32px;
  cy: 32px;
  r: 12px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}
</style><circle class="do2tny6mn"/><circle class="koquvbcvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:flag-for-japan"} {...others} />);
}

export default Component;
