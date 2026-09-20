import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oua8-7eug.css';
import '../../css/w/wt8mh7fkf.css';
import '../../css/h/h4mxexe-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oua8-7eug"/><path clip-rule="evenodd" class="wt8mh7fkf"/><path clip-rule="evenodd" class="h4mxexe-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-zip-bold-duotone"} {...others} />);
}

export default Component;
