import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzui81bfq.css';
import '../../css/a/ay5ndm_hw.css';
import '../../css/s/sg-qnbbln.css';
import '../../css/o/ohi-s8zgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nzui81bfq"/><path class="ay5ndm_hw"/><path class="sg-qnbbln"/><path class="ohi-s8zgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:analytics-board-graph-line"} {...others} />);
}

export default Component;
