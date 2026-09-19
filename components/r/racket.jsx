import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grb34gbeb.css';
import '../../css/m/mlcrs6b_l.css';
import '../../css/n/ne1pfgevp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="grb34gbeb"/><path class="mlcrs6b_l"/><path class="ne1pfgevp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:racket"} {...others} />);
}

export default Component;
