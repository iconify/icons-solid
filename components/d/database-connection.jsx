import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ib0bfjs-x.css';
import '../../css/a/agtdgvboj.css';
import '../../css/p/phwb8ebnx.css';
import '../../css/g/gu1jjjtbk.css';
import '../../css/w/wa8a2-4kk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ib0bfjs-x"/><path class="agtdgvboj"/><path class="phwb8ebnx"/><path class="gu1jjjtbk"/><path class="wa8a2-4kk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:database-connection"} {...others} />);
}

export default Component;
