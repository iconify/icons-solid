import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yq__4abaf.css';
import '../../css/t/t9r610bql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yq__4abaf"/><path clip-rule="evenodd" class="t9r610bql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:calendar"} {...others} />);
}

export default Component;
