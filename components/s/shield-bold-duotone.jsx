import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m51pkuzhy.css';
import '../../css/r/rh_uhdcwo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/ho1hk4giy.css';
import '../../css/f/fu9tnywzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m51pkuzhy"/><path class="rh_uhdcwo"/><g class="xtpeb-edw"><path class="ho1hk4giy"/><path class="fu9tnywzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-bold-duotone"} {...others} />);
}

export default Component;
