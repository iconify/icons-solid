import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bgm_-y5gj.css';
import '../../css/v/vmtis9bmr.css';
import '../../css/j/jx7exii8n.css';
import '../../css/b/b25i71vqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bgm_-y5gj"/><path class="vmtis9bmr"/><path class="jx7exii8n"/><path class="b25i71vqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wifi-on"} {...others} />);
}

export default Component;
