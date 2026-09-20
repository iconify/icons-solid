import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/etake0voz.css';
import '../../css/r/rind51b8t.css';
import '../../css/l/l3xver_wu.css';
import '../../css/l/l2zj1c4ns.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="etake0voz"/><path class="rind51b8t"/><path class="l3xver_wu"/><path class="l2zj1c4ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-deal-men-cash-conversation"} {...others} />);
}

export default Component;
