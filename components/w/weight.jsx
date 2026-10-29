import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/izb9cccdy.css';
import '../../css/j/jfru2eb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="izb9cccdy"/><path class="jfru2eb2v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:weight"} {...others} />);
}

export default Component;
