import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fal574quc.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/p/p33g7ob5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fal574quc"/><path class="tb5ln68hg"/><path class="p33g7ob5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:group-filled"} {...others} />);
}

export default Component;
