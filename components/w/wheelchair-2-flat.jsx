import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsz_7fcig.css';
import '../../css/h/hwgoyq6ej.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fsz_7fcig"/><path clip-rule="evenodd" class="hwgoyq6ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wheelchair-2-flat"} {...others} />);
}

export default Component;
