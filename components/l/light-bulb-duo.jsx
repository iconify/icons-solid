import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gka18obue.css';
import '../../css/f/ftcemokbj.css';
import '../../css/a/aj3plwbwr.css';
import '../../css/q/qpkp9yzjm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gka18obue"/><path class="ftcemokbj"/><path class="aj3plwbwr"/><path class="qpkp9yzjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:light-bulb-duo"} {...others} />);
}

export default Component;
