import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n36zmmbql.css';
import '../../css/z/zi8j62h1d.css';
import '../../css/u/ubxfl-wfc.css';
import '../../css/w/wovi-xzrv.css';
import '../../css/d/dgs8d651a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="n36zmmbql"/><path class="zi8j62h1d"/><path class="ubxfl-wfc"/><path class="wovi-xzrv"/><path clip-rule="evenodd" class="dgs8d651a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:computer-pc-desktop-flat"} {...others} />);
}

export default Component;
