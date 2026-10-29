import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x-m_43jif.css';
import '../../css/u/urjdred5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x-m_43jif"/><path class="urjdred5d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pickaxe"} {...others} />);
}

export default Component;
