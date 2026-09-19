import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9-237rsn.css';
import '../../css/p/p-gsvsbww.css';
import '../../css/p/p8igeb0vv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k9-237rsn"/><path class="p-gsvsbww"/><path class="p8igeb0vv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:three-triangles"} {...others} />);
}

export default Component;
