import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc237m_zh.css';
import '../../css/i/i_kfg6brk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oc237m_zh"/><path class="i_kfg6brk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:paperclip"} {...others} />);
}

export default Component;
