import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjjmetb3n.css';
import '../../css/a/aye_guweo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jjjmetb3n"/><path class="aye_guweo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-circle-heart"} {...others} />);
}

export default Component;
