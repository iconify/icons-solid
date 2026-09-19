import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyp2mwbic.css';
import '../../css/k/ki937_vam.css';
import '../../css/b/b6bcodz8n.css';
import '../../css/e/e-ggbq2as.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyp2mwbic"/><g class="ki937_vam"><path class="b6bcodz8n"/><path class="e-ggbq2as"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:data-backup"} {...others} />);
}

export default Component;
