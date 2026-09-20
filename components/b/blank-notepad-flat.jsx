import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acou0sbnx.css';
import '../../css/o/ow_6gab-w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="acou0sbnx"/><path clip-rule="evenodd" class="ow_6gab-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:blank-notepad-flat"} {...others} />);
}

export default Component;
