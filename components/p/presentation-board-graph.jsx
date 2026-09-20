import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in25xxb2m.css';
import '../../css/t/tut9p6mey.css';
import '../../css/j/j0-ahn93p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="in25xxb2m"/><path class="tut9p6mey"/><path class="j0-ahn93p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:presentation-board-graph"} {...others} />);
}

export default Component;
