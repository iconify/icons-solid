import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nxjbdabzh.css';
import '../../css/v/vezblbb5g.css';
import '../../css/a/ajone6a4x.css';
import '../../css/q/qsgo5rxvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nxjbdabzh wm-shadow"/><path class="vezblbb5g wm-shadow"/><path class="ajone6a4x"/><path class="qsgo5rxvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sticky-note"} {...others} />);
}

export default Component;
