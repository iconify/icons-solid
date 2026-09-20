import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnyemccis.css';
import '../../css/s/s8qdqwbpf.css';
import '../../css/f/f4k1wcxer.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dnyemccis"/><path class="s8qdqwbpf"/><path clip-rule="evenodd" class="f4k1wcxer"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-send-filled"} {...others} />);
}

export default Component;
