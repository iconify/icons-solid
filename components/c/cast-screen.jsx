import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0_qdybbx.css';
import '../../css/e/e4ug6oo-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i0_qdybbx"/><path class="e4ug6oo-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cast-screen"} {...others} />);
}

export default Component;
