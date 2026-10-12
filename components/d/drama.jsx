import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/su023lbew.css';
import '../../css/j/jc7o1cb2w.css';
import '../../css/w/wb34gcb-f.css';
import '../../css/o/o0s58ibrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="su023lbew"/><path class="jc7o1cb2w"/><path class="wb34gcb-f"/><path class="o0s58ibrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:drama"} {...others} />);
}

export default Component;
