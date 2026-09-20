import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4otalble.css';
import '../../css/v/vrozbbb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o4otalble"/><path clip-rule="evenodd" class="vrozbbb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:key-square2-filled"} {...others} />);
}

export default Component;
