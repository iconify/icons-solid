import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tskugxs3k.css';
import '../../css/p/pfkrjubhl.css';
import '../../css/e/erkj01bbj.css';
import '../../css/t/tad7-q2qc.css';
import '../../css/q/qg36qxbtn.css';
import '../../css/h/hxmw3obqv.css';
import '../../css/j/jebyzsbbi.css';
import '../../css/p/ppoc2zk3z.css';
import '../../css/x/xvfw0abtt.css';
import '../../css/f/fs05-ciix.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tskugxs3k"/><path class="pfkrjubhl"/><path class="erkj01bbj"/><path class="tad7-q2qc"/><path class="qg36qxbtn"/><path class="hxmw3obqv"/><path class="jebyzsbbi"/><path class="ppoc2zk3z"/><path class="xvfw0abtt"/><path class="fs05-ciix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:babyangel"} {...others} />);
}

export default Component;
