import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb_wbthuz.css';
import '../../css/q/qtkf3h-or.css';
import '../../css/a/ai3a9kmls.css';
import '../../css/g/g5rjs7bks.css';
import '../../css/y/yy60akbdl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tb_wbthuz"/><path class="qtkf3h-or"/><circle class="ai3a9kmls"/><circle class="g5rjs7bks"/><path class="yy60akbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:faxicon"} {...others} />);
}

export default Component;
