import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/usg456b4d.css';
import '../../css/v/vamyx2ohg.css';
import '../../css/o/onqyswbdh.css';
import '../../css/b/b42uobcxl.css';
import '../../css/o/oh-xkt67m.css';
import '../../css/h/h3xfvwbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="usg456b4d wm-k"/><path class="vamyx2ohg wm-a"/><path class="onqyswbdh wm-shadow"/><path class="b42uobcxl wm-k"/><path class="oh-xkt67m wm-a"/><path class="h3xfvwbbf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-tree-engrave"} {...others} />);
}

export default Component;
