import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzotw2ekp.css';
import '../../css/z/z0865achw.css';
import '../../css/q/qsolpuqay.css';
import '../../css/x/xbvq6fbrq.css';
import '../../css/r/r6pjmxgtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zzotw2ekp"/><path class="z0865achw"/><path class="qsolpuqay"/><path class="xbvq6fbrq"/><path class="r6pjmxgtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-image"} {...others} />);
}

export default Component;
