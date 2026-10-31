import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uq-azqhol.css';
import '../../css/p/plq6vo_ca.css';
import '../../css/m/mjkhw0b5w.css';
import '../../css/g/ggtlt1cud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uq-azqhol wm-shadow"/><path class="plq6vo_ca wm-shadow"/><path class="mjkhw0b5w"/><path class="ggtlt1cud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:folders"} {...others} />);
}

export default Component;
