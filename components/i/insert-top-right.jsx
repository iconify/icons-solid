import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dozv8bu4b.css';
import '../../css/j/jhu4hwrdz.css';
import '../../css/n/ntee6vcqu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dozv8bu4b"/><path class="jhu4hwrdz"/><path class="ntee6vcqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:insert-top-right"} {...others} />);
}

export default Component;
