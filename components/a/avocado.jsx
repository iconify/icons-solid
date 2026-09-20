import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-06_wb9e.css';
import '../../css/d/doxw0tbuo.css';
import '../../css/r/ru7nuwyac.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/h/hi33bccmz.css';
import '../../css/t/ttu5_nb5m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t-06_wb9e"/><circle class="doxw0tbuo"/><path class="ru7nuwyac"/><g class="x8poo_bjf"><path class="hi33bccmz"/><circle class="ttu5_nb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:avocado"} {...others} />);
}

export default Component;
