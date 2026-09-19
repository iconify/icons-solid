import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnf8j9biy.css';
import '../../css/g/gpwc7cubf.css';
import '../../css/x/xvy4t6cwe.css';
import '../../css/t/trwp-pbdq.css';
import '../../css/n/n92yxdtly.css';
import '../../css/j/jh7xcvbbj.css';
import '../../css/j/jfik1g00n.css';
import '../../css/a/aakjd4b4s.css';
import '../../css/i/i3udcckjn.css';
import '../../css/s/snzd07b_o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bnf8j9biy"/><rect class="gpwc7cubf"/><path class="xvy4t6cwe"/><rect class="trwp-pbdq"/><rect class="n92yxdtly"/><rect class="jh7xcvbbj"/><rect class="jfik1g00n"/><rect class="aakjd4b4s"/><rect class="i3udcckjn"/><rect class="snzd07b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:city"} {...others} />);
}

export default Component;
