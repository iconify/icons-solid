import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vto44fblp.css';
import '../../css/c/c4yt10bhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vto44fblp"/><path class="c4yt10bhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-bookmark"} {...others} />);
}

export default Component;
