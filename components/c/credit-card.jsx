import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2j6rdzub.css';
import '../../css/y/yd8uhaclo.css';
import '../../css/v/vsgujxbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o2j6rdzub"/><rect class="yd8uhaclo"/><path class="vsgujxbdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-card"} {...others} />);
}

export default Component;
