import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/woqkurbrc.css';
import '../../css/u/uw8pkwb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="woqkurbrc"/><path class="uw8pkwb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sun-outline"} {...others} />);
}

export default Component;
