import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdxj_ebso.css';
import '../../css/y/y5f59ibhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cdxj_ebso"/><path class="y5f59ibhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-visible"} {...others} />);
}

export default Component;
