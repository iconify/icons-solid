import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m01ctjbzw.css';
import '../../css/s/s0r2zwbma.css';
import '../../css/f/fu46eccto.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m01ctjbzw"/><path class="s0r2zwbma"/><path class="fu46eccto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:network-monitor-transfer-arrow-1"} {...others} />);
}

export default Component;
