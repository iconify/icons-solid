import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l73h5xklk.css';
import '../../css/z/z3_h9cbsy.css';
import '../../css/i/i-xjw8axl.css';

const viewBox = {"width":162,"height":48.7};
const content = `<g class="l73h5xklk"><path class="z3_h9cbsy"/><path class="i-xjw8axl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:alaska-airlines-dark"} {...others} />);
}

export default Component;
