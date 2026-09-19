import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/c-elrgb8n.css';
import '../../css/n/nw9mp7bns.css';
import '../../css/t/t355hjgxb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="c-elrgb8n"/><path class="nw9mp7bns"/><path class="t355hjgxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:full-selection"} {...others} />);
}

export default Component;
