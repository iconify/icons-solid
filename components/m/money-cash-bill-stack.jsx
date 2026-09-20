import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u4qdtgb-n.css';
import '../../css/b/b5-69v6mq.css';
import '../../css/s/splfu5bpb.css';
import '../../css/i/ibo5l7bcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="u4qdtgb-n"/><path class="b5-69v6mq"/><path class="splfu5bpb"/><path class="ibo5l7bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:money-cash-bill-stack"} {...others} />);
}

export default Component;
