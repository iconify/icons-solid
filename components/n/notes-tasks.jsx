import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dkkvodt2e.css';
import '../../css/x/xprivsdxn.css';
import '../../css/i/igau38bez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dkkvodt2e"/><path class="xprivsdxn"/><path class="igau38bez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-tasks"} {...others} />);
}

export default Component;
