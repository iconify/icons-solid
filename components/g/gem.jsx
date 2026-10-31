import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qy28_mbsz.css';
import '../../css/m/mq5wepbit.css';
import '../../css/y/yyc9_bcnt.css';
import '../../css/p/p81l2tb_i.css';
import '../../css/k/kl8xqacyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qy28_mbsz wm-shadow"/><path class="mq5wepbit wm-shadow"/><path class="yyc9_bcnt"/><path class="p81l2tb_i"/><path class="kl8xqacyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gem"} {...others} />);
}

export default Component;
