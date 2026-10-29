import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g3f5cwbbp.css';
import '../../css/w/wd66k1bjc.css';
import '../../css/l/l8mj6jmuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g3f5cwbbp"/><path class="wd66k1bjc"/><path class="l8mj6jmuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:radio-tower"} {...others} />);
}

export default Component;
