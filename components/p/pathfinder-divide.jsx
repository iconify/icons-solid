import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueolijb3i.css';
import '../../css/k/kcn_frb2a.css';
import '../../css/f/f-libdcom.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ueolijb3i"/><path class="kcn_frb2a"/><path class="f-libdcom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pathfinder-divide"} {...others} />);
}

export default Component;
