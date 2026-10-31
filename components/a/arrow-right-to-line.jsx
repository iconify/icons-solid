import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z-jqc1b6a.css';
import '../../css/k/kg2ec3mul.css';
import '../../css/m/mmtujrbet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k z-jqc1b6a"/><path class="kg2ec3mul wm-a"/><path class="mmtujrbet wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:arrow-right-to-line"} {...others} />);
}

export default Component;
