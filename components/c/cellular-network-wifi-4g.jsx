import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dtq3ihx1g.css';
import '../../css/z/zzr1xccry.css';
import '../../css/m/mat63ubej.css';
import '../../css/k/kem226bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dtq3ihx1g"/><path class="zzr1xccry"/><path class="mat63ubej"/><path class="kem226bqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cellular-network-wifi-4g"} {...others} />);
}

export default Component;
