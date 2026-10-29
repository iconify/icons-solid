import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wx-wl3buj.css';
import '../../css/l/l01r5ubui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wx-wl3buj"/><path class="l01r5ubui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-tree"} {...others} />);
}

export default Component;
