import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rodx-bbgi.css';
import '../../css/u/usszxechu.css';
import '../../css/y/yxybwwqbg.css';
import '../../css/u/u6wus0bjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rodx-bbgi"/><path class="usszxechu"/><path class="yxybwwqbg"/><path class="u6wus0bjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:credit-card-1"} {...others} />);
}

export default Component;
