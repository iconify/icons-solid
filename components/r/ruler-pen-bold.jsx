import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgdufzqdj.css';
import '../../css/t/t8ykyt4yk.css';
import '../../css/w/wcj52rb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rgdufzqdj"/><path class="t8ykyt4yk"/><path class="wcj52rb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-bold"} {...others} />);
}

export default Component;
