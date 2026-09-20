import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfhy-ebhj.css';
import '../../css/o/oes_wsblp.css';
import '../../css/v/vea79f44b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jfhy-ebhj"/><path class="oes_wsblp"/><path class="vea79f44b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-product-supplier-1"} {...others} />);
}

export default Component;
