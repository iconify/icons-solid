import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wswqiebpi.css';
import '../../css/m/mzp3bu2rz.css';
import '../../css/x/x_duj5byl.css';
import '../../css/g/gpavjvp5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-60 4.07 16.33)" class="wswqiebpi"/><rect transform="rotate(-60 4.07 16.33)" class="mzp3bu2rz"/><path class="x_duj5byl"/><path class="gpavjvp5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-rotate"} {...others} />);
}

export default Component;
