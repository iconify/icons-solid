import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a-k3z2s9a.css';
import '../../css/i/ifxccrbkd.css';
import '../../css/x/xsm6pfbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a-k3z2s9a"/><path class="ifxccrbkd wm-k"/><path class="wm-a xsm6pfbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stocking-sketch"} {...others} />);
}

export default Component;
