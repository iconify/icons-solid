import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1fgxbb7z.css';
import '../../css/t/ts4-t6bfy.css';
import '../../css/v/vsqee_1ne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m1fgxbb7z"/><path clip-rule="evenodd" class="ts4-t6bfy"/><path class="vsqee_1ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:drop-down-menu-flat"} {...others} />);
}

export default Component;
