import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mj8qxfbqs.css';
import '../../css/c/ckdti6bwh.css';
import '../../css/h/h9xae-trb.css';
import '../../css/y/y1o6dws8x.css';
import '../../css/y/yerqcib8r.css';
import '../../css/s/szdxwnbim.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mj8qxfbqs"/><path class="ckdti6bwh"/><path class="h9xae-trb"/><path class="y1o6dws8x"/><path class="yerqcib8r"/><path class="szdxwnbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-deal-handshake"} {...others} />);
}

export default Component;
