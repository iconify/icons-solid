import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ejrauv4gk.css';
import '../../css/h/hadl-ib6c.css';
import '../../css/x/xfjk5rbmg.css';
import '../../css/u/uhjj-5r8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ejrauv4gk"/><path class="hadl-ib6c wm-a"/><path class="wm-k xfjk5rbmg"/><path class="uhjj-5r8y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-image-sketch"} {...others} />);
}

export default Component;
