import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5z9h1bev.css';
import '../../css/a/a77v0r38a.css';
import '../../css/z/zvft0ab-n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="w5z9h1bev"/><path class="a77v0r38a"/><path class="zvft0ab-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bluetooth-duo"} {...others} />);
}

export default Component;
