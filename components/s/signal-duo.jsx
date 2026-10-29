import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/ruati2b7a.css';
import '../../css/t/t4ya6qb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ruati2b7a"/><path class="t4ya6qb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signal-duo"} {...others} />);
}

export default Component;
