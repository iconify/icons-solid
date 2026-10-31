import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hde-h8bnt.css';
import '../../css/p/ptpixbbse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="hde-h8bnt wm-k"/><path class="ptpixbbse wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wrap-text-gloss"} {...others} />);
}

export default Component;
