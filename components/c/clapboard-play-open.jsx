import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhes2ib9h.css';
import '../../css/t/twxtpdbiq.css';
import '../../css/e/emp_42bfk.css';
import '../../css/j/jhipmccyc.css';
import '../../css/y/yi-cmfbrh.css';
import '../../css/f/f3gzs_bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qhes2ib9h"/><path class="twxtpdbiq"/><path class="emp_42bfk"/><path class="jhipmccyc"/><path class="yi-cmfbrh"/><path class="f3gzs_bgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:clapboard-play-open"} {...others} />);
}

export default Component;
