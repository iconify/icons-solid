import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-jz80bxz.css';
import '../../css/b/bxr5_ubtl.css';
import '../../css/p/p4utojcvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j-jz80bxz"/><path class="bxr5_ubtl"/><path class="p4utojcvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-receive-flow-02"} {...others} />);
}

export default Component;
