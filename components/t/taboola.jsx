import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdxdnnbby.css';
import '../../css/f/f2pd8-plm.css';
import '../../css/p/py8aoxreo.css';
import '../../css/x/xdpdo-1yn.css';

const viewBox = {"width":1051.6,"height":254.7,"left":471,"top":-72.7};
const content = `<g class="qdxdnnbby"><path class="f2pd8-plm"/><path class="py8aoxreo"/><path class="xdpdo-1yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:taboola"} {...others} />);
}

export default Component;
