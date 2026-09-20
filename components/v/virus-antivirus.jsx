import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cax47xbmx.css';
import '../../css/p/pzw-3t-fx.css';
import '../../css/p/ppw3h9j-n.css';
import '../../css/w/w491lmbdv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cax47xbmx"/><path class="pzw-3t-fx"/><path class="ppw3h9j-n"/><path class="w491lmbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:virus-antivirus"} {...others} />);
}

export default Component;
