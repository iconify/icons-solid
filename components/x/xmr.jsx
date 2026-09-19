import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ydtohebyk.css';
import '../../css/j/jl_v0zi-o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ydtohebyk"/><path class="jl_v0zi-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xmr"} {...others} />);
}

export default Component;
