import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/d/d_ocesu0j.css';
import '../../css/j/jlg0b3bga.css';
import '../../css/f/f4ppiobje.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="d_ocesu0j"/><path class="jlg0b3bga"/><path class="f4ppiobje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:candy-cane-duo"} {...others} />);
}

export default Component;
