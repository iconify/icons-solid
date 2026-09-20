import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/blyr41bdj.css';
import '../../css/m/mv09pcb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="blyr41bdj"/><path class="mv09pcb8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:fire-b"} {...others} />);
}

export default Component;
