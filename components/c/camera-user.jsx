import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dys_oob-a.css';
import '../../css/o/o9dcmpxis.css';
import '../../css/x/xtc265b-b.css';
import '../../css/w/wr3_3pd8o.css';
import '../../css/g/gcumx5bwv.css';
import '../../css/o/oxswb6bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dys_oob-a"/><path class="o9dcmpxis"/><path class="xtc265b-b"/><path class="wr3_3pd8o"/><path class="gcumx5bwv"/><path class="oxswb6bdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:camera-user"} {...others} />);
}

export default Component;
