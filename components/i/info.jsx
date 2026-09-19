import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x733y_y1a.css';
import '../../css/i/imj983wsz.css';
import '../../css/p/pllsfnbyo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="x733y_y1a"/><path clip-rule="evenodd" class="imj983wsz"/><path class="pllsfnbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:info"} {...others} />);
}

export default Component;
