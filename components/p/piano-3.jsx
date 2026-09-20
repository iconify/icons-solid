import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhekvnzub.css';
import '../../css/m/m5fevxfgx.css';
import '../../css/f/fdk2vzbxo.css';
import '../../css/j/jpgutnuyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rhekvnzub"/><path class="m5fevxfgx"/><path class="fdk2vzbxo"/><path class="jpgutnuyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:piano-3"} {...others} />);
}

export default Component;
