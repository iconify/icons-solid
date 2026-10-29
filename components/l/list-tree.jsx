import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b42uobcxl.css';
import '../../css/o/oh-xkt67m.css';
import '../../css/h/h3xfvwbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b42uobcxl"/><path class="oh-xkt67m wm-a"/><path class="h3xfvwbbf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-tree"} {...others} />);
}

export default Component;
