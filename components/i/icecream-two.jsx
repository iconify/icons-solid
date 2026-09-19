import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gm_y72bsf.css';
import '../../css/w/w3cr9ab-i.css';
import '../../css/j/juw4_ubej.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="gm_y72bsf"/><path class="w3cr9ab-i"/><path class="juw4_ubej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:icecream-two"} {...others} />);
}

export default Component;
