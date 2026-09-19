import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mtr8gtysq.css';
import '../../css/x/x9_-dnb2u.css';
import '../../css/x/xg20wgnod.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path clip-rule="evenodd" class="mtr8gtysq"/><path class="x9_-dnb2u"/><path class="xg20wgnod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:download-four"} {...others} />);
}

export default Component;
