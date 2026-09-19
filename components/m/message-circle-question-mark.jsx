import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mygbtuldy.css';
import '../../css/w/w69gakdoi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mygbtuldy"/><path class="w69gakdoi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-circle-question-mark"} {...others} />);
}

export default Component;
