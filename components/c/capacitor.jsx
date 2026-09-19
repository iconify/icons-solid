import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwxogk98k.css';
import '../../css/i/ip9ddabpq.css';
import '../../css/e/edj7cw6ya.css';
import '../../css/n/nr4pz_bxl.css';
import '../../css/m/mdvjh5sjq.css';
import '../../css/v/v9ldk-m0q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nwxogk98k"/><path class="ip9ddabpq"/><path class="edj7cw6ya"/><path class="nr4pz_bxl"/><path class="mdvjh5sjq"/><path class="v9ldk-m0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:capacitor"} {...others} />);
}

export default Component;
