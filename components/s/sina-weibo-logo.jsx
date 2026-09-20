import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/exzotbbrr.css';
import '../../css/a/aw-i_6bsh.css';
import '../../css/w/w0cyefbqs.css';
import '../../css/i/im9ftqsrv.css';
import '../../css/z/z3m-eh92k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="exzotbbrr"/><path class="aw-i_6bsh"/><path class="w0cyefbqs"/><path class="im9ftqsrv"/><path class="z3m-eh92k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:sina-weibo-logo"} {...others} />);
}

export default Component;
