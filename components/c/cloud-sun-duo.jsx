import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ymyxtyy4a.css';
import '../../css/j/je6okbb5z.css';
import '../../css/r/rcz-smdjy.css';
import '../../css/x/xw85vjb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ymyxtyy4a"/><path class="je6okbb5z wm-a"/><path class="rcz-smdjy wm-a"/><path class="xw85vjb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sun-duo"} {...others} />);
}

export default Component;
