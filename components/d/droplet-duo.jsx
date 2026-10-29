import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/or8dn2mis.css';
import '../../css/b/b8357wzya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="or8dn2mis"/><path class="b8357wzya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:droplet-duo"} {...others} />);
}

export default Component;
