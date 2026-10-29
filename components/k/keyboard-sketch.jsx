import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qdi26uumk.css';
import '../../css/z/z0uikzb1u.css';
import '../../css/e/eutcltbzm.css';
import '../../css/h/hbi65rbll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qdi26uumk"/><path class="wm-a z0uikzb1u"/><path class="eutcltbzm wm-k"/><path class="hbi65rbll wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:keyboard-sketch"} {...others} />);
}

export default Component;
