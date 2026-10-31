import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kz-27qbnb.css';
import '../../css/n/nyzle-bww.css';
import '../../css/e/esgpm0syp.css';
import '../../css/u/u90yf2b5z.css';
import '../../css/r/rz80qw0kw.css';
import '../../css/x/xkfswu_bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kz-27qbnb"/><path class="nyzle-bww"/><path class="esgpm0syp wm-shine"/><path class="u90yf2b5z wm-k"/><path class="rz80qw0kw wm-a"/><path class="wm-deco xkfswu_bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:teddy-bear"} {...others} />);
}

export default Component;
