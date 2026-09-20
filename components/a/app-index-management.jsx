import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vg8yw9b0x.css';
import '../../css/t/te6hxebbf.css';
import '../../css/p/ptpauvbsu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vg8yw9b0x"/><path class="ouiIcon__fillSecondary te6hxebbf"/><path class="ptpauvbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-index-management"} {...others} />);
}

export default Component;
