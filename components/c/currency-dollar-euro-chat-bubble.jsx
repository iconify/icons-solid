import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/za-y-u5-e.css';
import '../../css/p/pruluhbfg.css';
import '../../css/q/qhu_wpbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="za-y-u5-e"/><path class="pruluhbfg"/><path class="qhu_wpbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:currency-dollar-euro-chat-bubble"} {...others} />);
}

export default Component;
