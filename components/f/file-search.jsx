import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n8ztwx76l.css';
import '../../css/r/rlxpg-bzl.css';
import '../../css/q/qmtah6ztw.css';
import '../../css/g/ges2tl-kq.css';
import '../../css/e/epb98ubka.css';
import '../../css/c/cz8n_wrpk.css';
import '../../css/l/l2x0qkb7u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="n8ztwx76l"/><path class="rlxpg-bzl"/><path class="qmtah6ztw"/><path class="ges2tl-kq"/><path clip-rule="evenodd" class="epb98ubka"/><path class="cz8n_wrpk"/><path class="l2x0qkb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:file-search"} {...others} />);
}

export default Component;
