import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/h/hlw7-vbbh.css';
import '../../css/m/mycvdyvtk.css';
import '../../css/g/gmgvlqxoh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="hlw7-vbbh"/><path class="mycvdyvtk"/><path class="gmgvlqxoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-bottom-center"} {...others} />);
}

export default Component;
