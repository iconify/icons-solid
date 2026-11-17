import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qsfl0x_5q.css';
import '../../css/w/wq22pjb6x.css';
import '../../css/e/es9oqf1rg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qsfl0x_5q"/><path class="wq22pjb6x"/><path class="es9oqf1rg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:circle-arrow-left"} {...others} />);
}

export default Component;
