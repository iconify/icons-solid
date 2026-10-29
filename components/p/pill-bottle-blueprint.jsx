import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pm89hh4er.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/v/vhcfjabbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pm89hh4er wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="jgka1gbzk wm-k"/><path class="vhcfjabbb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pill-bottle-blueprint"} {...others} />);
}

export default Component;
