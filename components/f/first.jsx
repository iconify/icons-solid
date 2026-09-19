import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nfsjvabfk.css';
import '../../css/i/i9tl2-vaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nfsjvabfk"/><path class="i9tl2-vaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:first"} {...others} />);
}

export default Component;
