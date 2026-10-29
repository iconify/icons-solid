import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z_pfq4bwn.css';
import '../../css/k/krxz-acfd.css';
import '../../css/z/zs3_58bis.css';
import '../../css/e/e9z8zubjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z_pfq4bwn"/><path class="krxz-acfd wm-k"/><path class="wm-k zs3_58bis"/><path class="e9z8zubjt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pickaxe-sketch"} {...others} />);
}

export default Component;
