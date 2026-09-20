import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/g/g2v-e666n.css';
import '../../css/w/w5gr3vtml.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="nx5d-bc1s"><path class="g2v-e666n"/><path class="w5gr3vtml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dailydotdev-dark"} {...others} />);
}

export default Component;
