import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e8tj0wb-h.css';
import '../../css/y/ymrcpuukv.css';
import '../../css/m/me66crjtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e8tj0wb-h"/><path class="ymrcpuukv"/><path class="me66crjtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:microprocessor-computer-chip-flash"} {...others} />);
}

export default Component;
