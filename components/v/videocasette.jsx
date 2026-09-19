import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4juqqlnl.css';
import '../../css/i/iuhmoacij.css';
import '../../css/w/wqpmlrbfh.css';
import '../../css/n/nja0j0bzj.css';
import '../../css/w/wuz_3z27l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v4juqqlnl"/><path class="iuhmoacij"/><path class="wqpmlrbfh"/><path class="nja0j0bzj"/><path class="wuz_3z27l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:videocasette"} {...others} />);
}

export default Component;
