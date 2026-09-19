import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p_ur16bcn.css';
import '../../css/y/y_uebdbhh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="p_ur16bcn"/><path class="y_uebdbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ast"} {...others} />);
}

export default Component;
