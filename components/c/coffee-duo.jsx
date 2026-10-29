import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m8nybubas.css';
import '../../css/g/g9g2iobxb.css';
import '../../css/o/o7ull5bnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m8nybubas"/><path class="g9g2iobxb wm-a"/><path class="o7ull5bnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coffee-duo"} {...others} />);
}

export default Component;
