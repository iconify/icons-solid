import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmpwcy8fr.css';
import '../../css/t/tggoaoeaz.css';
import '../../css/m/mg09rj_6s.css';
import '../../css/m/mljk_1m2e.css';
import '../../css/h/huuajhmrh.css';
import '../../css/u/uiaz26ttg.css';
import '../../css/f/f9om3zb4l.css';
import '../../css/s/ssb6b8uzd.css';
import '../../css/m/mgd-d8sbx.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="dmpwcy8fr"/><path class="tggoaoeaz"/><path class="mg09rj_6s"/><path class="mljk_1m2e"/><circle class="huuajhmrh"/><path class="uiaz26ttg"/><path class="f9om3zb4l"/><path class="ssb6b8uzd"/><path class="mgd-d8sbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hot-face"} {...others} />);
}

export default Component;
