import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v173lkz4p.css';
import '../../css/n/na_4mhdsu.css';
import '../../css/u/ung0jz3kx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v173lkz4p"/><path class="na_4mhdsu"/><path class="ung0jz3kx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:file-code-css"} {...others} />);
}

export default Component;
