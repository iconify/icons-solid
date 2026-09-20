import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7sy_fbui.css';
import '../../css/b/bgq4_qbnw.css';
import '../../css/k/k-fis0btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v7sy_fbui"/><path class="bgq4_qbnw"/><path class="k-fis0btt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:heading-4"} {...others} />);
}

export default Component;
