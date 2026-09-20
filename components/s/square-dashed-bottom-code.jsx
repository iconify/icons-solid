import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jv6jl8s7q.css';
import '../../css/c/ck0-rybti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jv6jl8s7q"/><path class="ck0-rybti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-dashed-bottom-code"} {...others} />);
}

export default Component;
