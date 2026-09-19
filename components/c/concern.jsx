import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lt9927b3v.css';
import '../../css/n/non4cgb_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="lt9927b3v"/><path class="non4cgb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:concern"} {...others} />);
}

export default Component;
