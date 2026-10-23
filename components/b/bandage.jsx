import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kxgqrsb3g.css';
import '../../css/a/ab06w6wfc.css';
import '../../css/h/hv6qyvkuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="kxgqrsb3g"/><path class="ab06w6wfc"/><path class="hv6qyvkuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bandage"} {...others} />);
}

export default Component;
