import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gs03f-min.css';
import '../../css/u/uavw2yb6h.css';
import '../../css/e/ezg7ktv-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gs03f-min"/><path class="uavw2yb6h"/><path class="ezg7ktv-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-whole-word"} {...others} />);
}

export default Component;
