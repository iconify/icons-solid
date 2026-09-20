import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/m/mawdj8s2p.css';
import '../../css/m/mz9-t6b9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="mawdj8s2p"/><path class="mz9-t6b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ito-duotone"} {...others} />);
}

export default Component;
