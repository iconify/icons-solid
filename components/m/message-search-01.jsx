import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t-2_-phup.css';
import '../../css/d/dsfj0ubex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t-2_-phup"/><path class="dsfj0ubex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-search-01"} {...others} />);
}

export default Component;
