import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xknbwz03b.css';
import '../../css/u/udvrxnbsl.css';
import '../../css/b/b8z6p9v7k.css';
import '../../css/o/o70gt2dne.css';
import '../../css/i/ixeoxijmi.css';
import '../../css/n/njj_tab8d.css';
import '../../css/j/j9or7aclf.css';
import '../../css/x/xgo5q1bkd.css';

const viewBox = {"width":1195,"height":1207};
const content = `<g class="ft5dv1b6b"><path class="xknbwz03b"/><path class="udvrxnbsl"/><path class="b8z6p9v7k"/><path class="o70gt2dne"/><path class="ixeoxijmi"/><path class="njj_tab8d"/><path class="j9or7aclf"/><path class="xgo5q1bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uxcorprangel-dark"} {...others} />);
}

export default Component;
