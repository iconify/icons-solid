import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5g-qd7ax.css';
import '../../css/j/jmchjfbxo.css';
import '../../css/v/vvyhyxb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g5g-qd7ax"/><path class="jmchjfbxo"/><path class="vvyhyxb9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:line-segment"} {...others} />);
}

export default Component;
