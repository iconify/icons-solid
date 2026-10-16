import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai7np9bek.css';
import '../../css/f/fv-n5-38p.css';
import '../../css/v/vu1japbay.css';
import '../../css/u/ucci88bxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ai7np9bek"/><path class="fv-n5-38p"/><rect class="vu1japbay"/><path class="ucci88bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-right-click"} {...others} />);
}

export default Component;
