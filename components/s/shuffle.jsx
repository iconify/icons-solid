import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o89w86b0v.css';
import '../../css/m/malxypbal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o89w86b0v"/><path class="malxypbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:shuffle"} {...others} />);
}

export default Component;
