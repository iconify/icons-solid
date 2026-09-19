import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j977qfbyx.css';
import '../../css/g/gvqncouol.css';
import '../../css/g/gmlya5hur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="j977qfbyx"/><path class="gvqncouol"/><path class="gmlya5hur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:credit-card-outline"} {...others} />);
}

export default Component;
