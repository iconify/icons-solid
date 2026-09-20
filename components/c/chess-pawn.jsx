import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/z/zper8ccee.css';
import '../../css/v/vt5vzf2ig.css';
import '../../css/j/j_eundbvx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="zper8ccee"/><path class="vt5vzf2ig"/><path class="j_eundbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chess-pawn"} {...others} />);
}

export default Component;
