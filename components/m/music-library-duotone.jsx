import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxusbjb8q.css';
import '../../css/y/yrdyw7tff.css';
import '../../css/h/h8auu-0yw.css';
import '../../css/f/fwxnfntjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oxusbjb8q"/><path class="yrdyw7tff"/><path class="h8auu-0yw"/><path class="fwxnfntjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-library-duotone"} {...others} />);
}

export default Component;
