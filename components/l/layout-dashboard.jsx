import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vbxtdzvhd.css';
import '../../css/w/w3cohccds.css';
import '../../css/o/ow8ez-lyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vbxtdzvhd"/><path class="w3cohccds wm-shine"/><path class="ow8ez-lyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:layout-dashboard"} {...others} />);
}

export default Component;
