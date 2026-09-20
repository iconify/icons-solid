import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jeymuiqqt.css';
import '../../css/z/z4h8odb-v.css';
import '../../css/i/isn05kb3q.css';
import '../../css/t/t6wcrcb3v.css';
import '../../css/j/ju0-ocdij.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jeymuiqqt"/><path clip-rule="evenodd" class="z4h8odb-v"/><path class="isn05kb3q"/><path class="t6wcrcb3v"/><path class="ju0-ocdij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:painting-board-flat"} {...others} />);
}

export default Component;
