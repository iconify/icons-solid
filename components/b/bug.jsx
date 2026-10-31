import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d7-2j3b_l.css';
import '../../css/a/alprjkbuk.css';
import '../../css/k/kw9emrbos.css';
import '../../css/f/f7u0_3qmj.css';
import '../../css/q/qftri9vyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d7-2j3b_l wm-shadow"/><path class="alprjkbuk wm-shadow"/><path class="kw9emrbos"/><path class="f7u0_3qmj"/><path class="qftri9vyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bug"} {...others} />);
}

export default Component;
