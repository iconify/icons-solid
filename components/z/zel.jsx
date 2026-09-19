import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xdacq_bnt.css';
import '../../css/l/l4newbcia.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="xdacq_bnt"/><path class="l4newbcia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:zel"} {...others} />);
}

export default Component;
