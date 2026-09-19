import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqx1id87h.css';
import '../../css/z/zo3ccobrl.css';
import '../../css/r/r2gi9h8in.css';
import '../../css/f/f_3ah1bgm.css';
import '../../css/p/pof1jml4s.css';
import '../../css/g/g3ylqubgx.css';
import '../../css/l/lvxyvj_du.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="uqx1id87h"/><path class="zo3ccobrl"/><path class="r2gi9h8in"/><path class="f_3ah1bgm"/><path class="pof1jml4s"/><path class="g3ylqubgx"/><path class="lvxyvj_du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:discordjs"} {...others} />);
}

export default Component;
