import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inx9gng5o.css';
import '../../css/c/ct9663bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="inx9gng5o"/><path class="ct9663bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:download-circle-fill"} {...others} />);
}

export default Component;
