import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tlqlazlox.css';
import '../../css/x/x6a9ejb1u.css';
import '../../css/b/bcc9m6h1q.css';
import '../../css/c/cjaxhhrrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tlqlazlox"/><path class="wm-a x6a9ejb1u"/><path class="bcc9m6h1q wm-a"/><path class="cjaxhhrrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mithai-box-duo"} {...others} />);
}

export default Component;
