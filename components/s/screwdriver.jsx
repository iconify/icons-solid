import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eb4pff_zd.css';
import '../../css/i/i62oecbnr.css';
import '../../css/o/oan-56bxy.css';
import '../../css/b/bg74bsbau.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="eb4pff_zd"/><path class="i62oecbnr"/><path class="oan-56bxy"/><path class="bg74bsbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:screwdriver"} {...others} />);
}

export default Component;
