import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xoe6bwbqi.css';
import '../../css/u/u7jxipbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xoe6bwbqi"/><path class="u7jxipbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:key-sketch"} {...others} />);
}

export default Component;
