import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ctg6bib7x.css';
import '../../css/m/mt3-rnpev.css';
import '../../css/e/ej888ab6r.css';
import '../../css/d/da00rnb4f.css';
import '../../css/l/l7t2wxkxa.css';
import '../../css/k/kpf0icbby.css';
import '../../css/b/b9gmigklb.css';
import '../../css/x/xiezbsprt.css';
import '../../css/y/y_zxgsbcj.css';
import '../../css/x/xjzvkabal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ctg6bib7x wm-k"/><path class="mt3-rnpev wm-s"/><path class="ej888ab6r wm-deco"/><path class="da00rnb4f wm-k"/><path class="l7t2wxkxa wm-shadow"/><circle class="kpf0icbby wm-a"/><circle class="b9gmigklb wm-a"/><path class="wm-s xiezbsprt"/><path class="wm-s y_zxgsbcj"/><path class="wm-shine xjzvkabal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:camera-off"} {...others} />);
}

export default Component;
