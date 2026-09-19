import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xr_v0bl0a.css';
import '../../css/t/tm68yffwl.css';
import '../../css/i/in5lanbvd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xr_v0bl0a"/><path class="tm68yffwl"/><path class="in5lanbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:taj-mahal"} {...others} />);
}

export default Component;
