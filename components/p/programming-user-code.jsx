import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2s4yfb3i.css';
import '../../css/j/jhwqi--vq.css';
import '../../css/z/z68o2wbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g2s4yfb3i"/><path class="jhwqi--vq"/><path class="z68o2wbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-user-code"} {...others} />);
}

export default Component;
