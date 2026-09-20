import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s7ml_zbvx.css';
import '../../css/g/gu4o6xvsl.css';
import '../../css/e/eiee3q-fs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="s7ml_zbvx"/><path class="gu4o6xvsl"/><path class="eiee3q-fs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cables-usb-1"} {...others} />);
}

export default Component;
