import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hh79unbjt.css';
import '../../css/j/j1d8v-bos.css';
import '../../css/u/u6mu3pbbg.css';
import '../../css/w/wnnq1tbxl.css';
import '../../css/f/fnz-6bhlk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hh79unbjt"/><circle class="j1d8v-bos"/><circle class="u6mu3pbbg"/><circle class="wnnq1tbxl"/><circle class="fnz-6bhlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:vector-polygon"} {...others} />);
}

export default Component;
