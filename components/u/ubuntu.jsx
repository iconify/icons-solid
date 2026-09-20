import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uo05yyjpj.css';
import '../../css/f/fm01msbde.css';
import '../../css/g/g1o6erbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="uo05yyjpj"/><path class="fm01msbde"/><path class="g1o6erbxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:ubuntu"} {...others} />);
}

export default Component;
