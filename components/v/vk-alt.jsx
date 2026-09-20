import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxwr-bxls.css';
import '../../css/c/citlv-btt.css';
import '../../css/q/qpac77bkh.css';
import '../../css/j/jidhs7d5l.css';
import '../../css/n/nn93icb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxwr-bxls"/><path class="citlv-btt"/><path class="qpac77bkh"/><path class="jidhs7d5l"/><path class="nn93icb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:vk-alt"} {...others} />);
}

export default Component;
