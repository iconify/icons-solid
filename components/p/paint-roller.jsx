import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/niw7-soza.css';
import '../../css/w/wu7w2tbza.css';
import '../../css/g/g8qulermz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="niw7-soza"/><path class="wu7w2tbza"/><path class="g8qulermz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:paint-roller"} {...others} />);
}

export default Component;
