import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p62y5wbmg.css';
import '../../css/j/j3vkzhbdr.css';
import '../../css/h/ha4ubezmg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="p62y5wbmg"/><path class="j3vkzhbdr"/><path class="ha4ubezmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pencil-circle-flat"} {...others} />);
}

export default Component;
