import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fsazeubvv.css';
import '../../css/b/b6_19ubha.css';
import '../../css/a/a16lvcbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fsazeubvv"/><path class="b6_19ubha"/><path class="a16lvcbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:console"} {...others} />);
}

export default Component;
