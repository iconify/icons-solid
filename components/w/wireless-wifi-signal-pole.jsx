import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/emswq_b0d.css';
import '../../css/o/o3s8st4ef.css';
import '../../css/y/yiijok71l.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="emswq_b0d"/><path class="o3s8st4ef"/><path class="yiijok71l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wireless-wifi-signal-pole"} {...others} />);
}

export default Component;
