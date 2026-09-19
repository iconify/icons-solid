import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rbb69cszp.css';
import '../../css/n/n1jldjbbr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="rbb69cszp"/><path class="n1jldjbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diamond-ring"} {...others} />);
}

export default Component;
