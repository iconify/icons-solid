import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/in8zjxbij.css';
import '../../css/t/tr13-2f7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="in8zjxbij"/><path clip-rule="evenodd" class="tr13-2f7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:office-filled"} {...others} />);
}

export default Component;
