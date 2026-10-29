import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aoplr74jp.css';
import '../../css/e/etyvj2b-j.css';
import '../../css/l/lxmb61mfr.css';
import '../../css/w/wv9xrqw2w.css';
import '../../css/b/bym_ymbba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aoplr74jp"/><path class="etyvj2b-j wm-k"/><path class="lxmb61mfr wm-a"/><path class="wm-k wv9xrqw2w"/><path class="bym_ymbba wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:receipt-text-sketch"} {...others} />);
}

export default Component;
