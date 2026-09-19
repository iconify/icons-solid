import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/f/flinjuzmh.css';
import '../../css/f/f_89nxb9c.css';
import '../../css/k/km0e5ol5k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="flinjuzmh"/><path class="f_89nxb9c"/><path class="km0e5ol5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-horizontal-top"} {...others} />);
}

export default Component;
