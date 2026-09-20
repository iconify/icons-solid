import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh9nke0wt.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7q0qg3vo.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGsvPgGcfj" class="xh9nke0wt"/></defs><g class="cuyn6tgcc"><use href="#SVGsvPgGcfj"/><use href="#SVGsvPgGcfj"/><path class="v7q0qg3vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-cloud3-filled"} {...others} />);
}

export default Component;
