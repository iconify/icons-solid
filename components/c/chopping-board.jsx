import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fnlil_bkj.css';
import '../../css/y/y_q0le7li.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="fnlil_bkj"/><path class="y_q0le7li"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chopping-board"} {...others} />);
}

export default Component;
