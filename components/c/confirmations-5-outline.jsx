import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bgtimob-e.css';
import '../../css/g/gxej23tyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="bgtimob-e"/><path class="gxej23tyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-5-outline"} {...others} />);
}

export default Component;
