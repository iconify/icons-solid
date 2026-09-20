import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykyycg0ch.css';
import '../../css/p/pa4wrbbok.css';
import '../../css/r/rsym7bckk.css';
import '../../css/n/n7-ys6bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ykyycg0ch"/><path class="pa4wrbbok"/><path class="rsym7bckk"/><path class="n7-ys6bfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notebook-bookmark-duotone"} {...others} />);
}

export default Component;
