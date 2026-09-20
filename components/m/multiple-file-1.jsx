import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fccutbz8z.css';
import '../../css/o/oc2snjz4u.css';
import '../../css/q/qhvp29bey.css';
import '../../css/n/ncko7bbpr.css';
import '../../css/q/qn-0qcb6j.css';
import '../../css/m/ml_d2jb6g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fccutbz8z"/><path class="oc2snjz4u"/><path class="qhvp29bey"/><path class="ncko7bbpr"/><path class="qn-0qcb6j"/><path class="ml_d2jb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:multiple-file-1"} {...others} />);
}

export default Component;
