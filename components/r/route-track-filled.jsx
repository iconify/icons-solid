import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cj6l2-z2h.css';
import '../../css/g/gyql7h6tw.css';
import '../../css/j/jgqlw59hy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cj6l2-z2h"/><path class="gyql7h6tw"/><path class="jgqlw59hy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:route-track-filled"} {...others} />);
}

export default Component;
