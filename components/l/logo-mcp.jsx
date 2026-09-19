import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8ze_uwyl.css';
import '../../css/w/wpuu0kbuo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="c8ze_uwyl"/><path class="wpuu0kbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-mcp"} {...others} />);
}

export default Component;
