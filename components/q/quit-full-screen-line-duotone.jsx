import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jvzm0ac7t.css';
import '../../css/j/jfoq-1h6n.css';
import '../../css/u/u3tqh8b-y.css';
import '../../css/z/z3ylw7bis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jvzm0ac7t"/><path class="jfoq-1h6n"/><path class="u3tqh8b-y"/><path class="z3ylw7bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-line-duotone"} {...others} />);
}

export default Component;
