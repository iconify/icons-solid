import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pqlq7sbei.css';
import '../../css/j/j7l690bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pqlq7sbei"/><path class="j7l690bdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-down-02"} {...others} />);
}

export default Component;
