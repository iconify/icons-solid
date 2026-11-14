import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jonwy6b0f.css';
import '../../css/c/c7-6eoe9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jonwy6b0f"/><path class="c7-6eoe9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-download-01"} {...others} />);
}

export default Component;
