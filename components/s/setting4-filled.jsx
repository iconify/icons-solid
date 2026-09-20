import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdkk-6buh.css';
import '../../css/b/b9c76joug.css';
import '../../css/y/yz124rbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rdkk-6buh"/><path class="b9c76joug"/><path class="yz124rbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:setting4-filled"} {...others} />);
}

export default Component;
