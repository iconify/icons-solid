import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w9w-myx4m.css';
import '../../css/q/qbji8fb1i.css';
import '../../css/m/mj8ragb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w9w-myx4m"/><path class="qbji8fb1i"/><path class="mj8ragb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:e-commerce-click-buy"} {...others} />);
}

export default Component;
