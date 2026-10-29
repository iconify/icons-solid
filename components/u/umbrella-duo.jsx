import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdp7v8_-g.css';
import '../../css/g/gtohkybxy.css';
import '../../css/r/rxypl7oqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mdp7v8_-g"/><path class="gtohkybxy wm-a"/><path class="rxypl7oqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:umbrella-duo"} {...others} />);
}

export default Component;
