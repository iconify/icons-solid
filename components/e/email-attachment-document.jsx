import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fb5yvixpf.css';
import '../../css/w/w16g_ebrf.css';
import '../../css/s/sjap5vbbd.css';
import '../../css/m/m32bgrbpv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fb5yvixpf"/><path class="w16g_ebrf"/><path class="sjap5vbbd"/><path class="m32bgrbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:email-attachment-document"} {...others} />);
}

export default Component;
