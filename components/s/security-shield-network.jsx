import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7s8kco0k.css';
import '../../css/v/vehtb993a.css';
import '../../css/d/dc6ffkbpw.css';
import '../../css/t/ts2ahubly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7s8kco0k"/><path class="vehtb993a"/><path class="dc6ffkbpw"/><path class="ts2ahubly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:security-shield-network"} {...others} />);
}

export default Component;
