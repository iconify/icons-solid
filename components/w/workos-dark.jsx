import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/hy4rqvb5m.css';
import '../../css/t/t_vp7-b6a.css';

const viewBox = {"width":55.4,"height":48};
const content = `<g class="n1mjunbsu"><path class="hy4rqvb5m"/><path class="t_vp7-b6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:workos-dark"} {...others} />);
}

export default Component;
