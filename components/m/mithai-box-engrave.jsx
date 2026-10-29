import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/esr8mjbfe.css';
import '../../css/k/k6ysd255s.css';
import '../../css/c/cjaxhhrrf.css';
import '../../css/b/bcc9m6h1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="esr8mjbfe"/><path class="k6ysd255s wm-shadow"/><path class="cjaxhhrrf"/><path class="bcc9m6h1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mithai-box-engrave"} {...others} />);
}

export default Component;
