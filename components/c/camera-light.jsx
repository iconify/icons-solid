import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zwtw4ybnw.css';
import '../../css/q/q4y4c8bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="zwtw4ybnw"/><circle class="q4y4c8bkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:camera-light"} {...others} />);
}

export default Component;
