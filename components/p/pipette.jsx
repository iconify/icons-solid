import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji2crpo9i.css';
import '../../css/j/ju1zfuy8v.css';
import '../../css/q/qj3--ubbg.css';
import '../../css/h/hb33mabnm.css';
import '../../css/n/nqptuk2yg.css';
import '../../css/o/olhd1acpx.css';
import '../../css/j/jn24hob3i.css';
import '../../css/f/fkqa8tb7a.css';
import '../../css/x/xkc6adbyr.css';
import '../../css/v/v5uny9izr.css';
import '../../css/b/b-4cd9bnn.css';
import '../../css/t/tsqaxhbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji2crpo9i wm-shadow"/><path class="ju1zfuy8v wm-k"/><path class="qj3--ubbg wm-k"/><path class="hb33mabnm wm-k"/><path class="nqptuk2yg wm-k"/><path class="olhd1acpx wm-k"/><path class="jn24hob3i wm-shine"/><path class="fkqa8tb7a wm-a"/><path class="wm-a xkc6adbyr"/><path class="v5uny9izr wm-a"/><path class="b-4cd9bnn wm-a"/><path class="tsqaxhbyf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pipette"} {...others} />);
}

export default Component;
