import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b9xwaeb0f.css';
import '../../css/k/kx9parvdn.css';
import '../../css/v/vjsd4sbgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b9xwaeb0f"/><path class="kx9parvdn wm-a"/><path class="vjsd4sbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cpu-duo"} {...others} />);
}

export default Component;
