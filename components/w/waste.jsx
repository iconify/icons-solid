import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rfrnaqb9j.css';
import '../../css/z/zk1d_9bxj.css';
import '../../css/u/urc6g4bov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rfrnaqb9j"/><path class="zk1d_9bxj"/><path class="urc6g4bov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waste"} {...others} />);
}

export default Component;
