import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iuwewxhtl.css';
import '../../css/i/ihvh-nbqm.css';
import '../../css/q/qmnemzcmc.css';
import '../../css/z/zdyur4b_z.css';
import '../../css/y/yc79_bcsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="iuwewxhtl"/><path class="ihvh-nbqm"/><path class="qmnemzcmc"/><path class="zdyur4b_z"/><path class="yc79_bcsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:zap"} {...others} />);
}

export default Component;
