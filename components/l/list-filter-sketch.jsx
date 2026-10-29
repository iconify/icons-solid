import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v3xxggbuv.css';
import '../../css/f/fngyexhig.css';
import '../../css/d/d6r7_2bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v3xxggbuv"/><path class="fngyexhig wm-k"/><path class="d6r7_2bbn wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-filter-sketch"} {...others} />);
}

export default Component;
