import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/csmm2dumj.css';
import '../../css/u/udmds6x2x.css';
import '../../css/f/f_9rycbum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="csmm2dumj"/><path class="udmds6x2x"/><path class="f_9rycbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-transfer-half"} {...others} />);
}

export default Component;
