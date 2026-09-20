import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rlmsqmksn.css';
import '../../css/m/mp4-en0wo.css';
import '../../css/s/sico8fw_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rlmsqmksn"/><path class="mp4-en0wo"/><path class="sico8fw_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:microprocessor-computer-chip-search"} {...others} />);
}

export default Component;
