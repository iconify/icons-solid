import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uypib39ja.css';
import '../../css/r/rpwu1pdfw.css';
import '../../css/j/jvy1ribzi.css';
import '../../css/i/ickouebez.css';
import '../../css/m/mt4l--b1n.css';
import '../../css/v/vs4i6mbke.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="uypib39ja"><rect class="rpwu1pdfw"/><rect class="jvy1ribzi"/><rect class="ickouebez"/><path class="mt4l--b1n"/><path class="vs4i6mbke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:cds"} {...others} />);
}

export default Component;
