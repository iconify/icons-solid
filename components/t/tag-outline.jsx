import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/x-1sijr5f.css';
import '../../css/d/dt-gdj9go.css';
import '../../css/u/urjx-ibsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="x-1sijr5f"/><path class="dt-gdj9go"/><path class="urjx-ibsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:tag-outline"} {...others} />);
}

export default Component;
