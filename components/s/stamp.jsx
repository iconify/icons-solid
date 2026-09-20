import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/cukiv3ibm.css';
import '../../css/o/o_z-5bebw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="cukiv3ibm"/><path class="o_z-5bebw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:stamp"} {...others} />);
}

export default Component;
