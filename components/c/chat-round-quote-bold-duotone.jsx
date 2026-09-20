import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bym8zsb_r.css';
import '../../css/r/ry49nebrj.css';
import '../../css/b/bnq6tg8ml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bym8zsb_r"/><path clip-rule="evenodd" class="ry49nebrj"/><path clip-rule="evenodd" class="bnq6tg8ml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-quote-bold-duotone"} {...others} />);
}

export default Component;
