import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcfwjek6q.css';
import '../../css/z/z0zaodwrd.css';
import '../../css/g/gnnet6bqv.css';
import '../../css/k/kbui5dq_n.css';
import '../../css/v/vkacibc-q.css';
import '../../css/z/zc-yl53ga.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qcfwjek6q"/><path class="z0zaodwrd"/><path class="gnnet6bqv"/><path clip-rule="evenodd" class="kbui5dq_n"/><path class="vkacibc-q"/><path class="zc-yl53ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volume-2-outline"} {...others} />);
}

export default Component;
