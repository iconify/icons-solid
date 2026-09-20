import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyhxp_bqm.css';
import '../../css/h/h_wul63na.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dyhxp_bqm"/><path class="h_wul63na"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-station-flat"} {...others} />);
}

export default Component;
