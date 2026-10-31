import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gfgcf57lr.css';
import '../../css/a/atf-1hfvj.css';
import '../../css/k/kzn0lcbxv.css';
import '../../css/m/mek8yvpra.css';
import '../../css/g/gp0v6yazo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="pr52f_b5y"><path class="gfgcf57lr"/><path class="atf-1hfvj"/><path class="kzn0lcbxv"/><path class="mek8yvpra"/><path class="gp0v6yazo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:picard-facepalm"} {...others} />);
}

export default Component;
