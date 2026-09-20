import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq-w5mbfq.css';
import '../../css/a/arxkdxz9l.css';
import '../../css/g/go3xqjb-k.css';
import '../../css/i/i_5v9ocab.css';
import '../../css/g/grmu2q08k.css';
import '../../css/q/qjus_pd3b.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/a/a1-805p1k.css';
import '../../css/z/z7n4tnvcc.css';
import '../../css/o/oqabbu79e.css';
import '../../css/j/jnq3klbzy.css';
import '../../css/s/selq1-5qr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="oq-w5mbfq"/><path class="arxkdxz9l"/><circle class="go3xqjb-k"/><path class="i_5v9ocab"/><circle class="grmu2q08k"/><circle class="qjus_pd3b"/><g class="x8poo_bjf"><circle class="a1-805p1k"/><path class="z7n4tnvcc"/><circle class="oqabbu79e"/><circle class="jnq3klbzy"/><path class="selq1-5qr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:articulated-lorry"} {...others} />);
}

export default Component;
