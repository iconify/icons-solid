import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arbl_acfa.css';
import '../../css/j/jjurvxulj.css';
import '../../css/w/w3lw55b-f.css';
import '../../css/i/iii9vdbnp.css';
import '../../css/c/c2g-pd3xp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="arbl_acfa"/><path class="jjurvxulj"/><path class="w3lw55b-f"/><path class="iii9vdbnp"/><path class="c2g-pd3xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-plugged-48-bold"} {...others} />);
}

export default Component;
