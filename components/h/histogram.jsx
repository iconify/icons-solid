import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/w/w94kgrhdl.css';
import '../../css/a/am6of0txh.css';
import '../../css/q/qdc63jnsb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="w94kgrhdl"/><path class="am6of0txh"/><path class="qdc63jnsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:histogram"} {...others} />);
}

export default Component;
