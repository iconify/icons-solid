import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zn-9lpbfa.css';
import '../../css/x/xtlfw0b-a.css';
import '../../css/b/b-sovabka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zn-9lpbfa"/><path class="wm-k xtlfw0b-a"/><path class="b-sovabka wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-alert-sketch"} {...others} />);
}

export default Component;
