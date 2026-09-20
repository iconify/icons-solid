import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j74d-_b7l.css';
import '../../css/i/i4dk0nbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j74d-_b7l"/><path clip-rule="evenodd" class="i4dk0nbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-playlist-added"} {...others} />);
}

export default Component;
