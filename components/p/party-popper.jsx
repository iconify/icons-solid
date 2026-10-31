import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iy079poob.css';
import '../../css/m/mmz9a3bma.css';
import '../../css/d/dbvcyhb4q.css';
import '../../css/f/fikhfsbjl.css';
import '../../css/e/exhnsok7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="iy079poob wm-shadow"/><path class="mmz9a3bma"/><path class="dbvcyhb4q"/><path class="fikhfsbjl"/><path class="exhnsok7e wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:party-popper"} {...others} />);
}

export default Component;
