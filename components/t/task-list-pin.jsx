import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hg7piub4a.css';
import '../../css/d/d6ie_ccjj.css';
import '../../css/v/veca46pdo.css';
import '../../css/m/mly3pxb1l.css';
import '../../css/m/mv40occls.css';
import '../../css/r/rx0-jccvt.css';
import '../../css/f/fpx645bgk.css';
import '../../css/a/aryb110hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hg7piub4a"/><path class="d6ie_ccjj"/><path class="veca46pdo"/><path class="mly3pxb1l"/><path class="mv40occls"/><path class="rx0-jccvt"/><path class="fpx645bgk"/><path class="aryb110hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:task-list-pin"} {...others} />);
}

export default Component;
