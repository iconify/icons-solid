import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e63dy304p.css';
import '../../css/s/svi8x9byo.css';
import '../../css/c/cgkpg5bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e63dy304p"/><path class="svi8x9byo"/><path clip-rule="evenodd" class="cgkpg5bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-locked-fill"} {...others} />);
}

export default Component;
