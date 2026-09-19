import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/px_yz9bks.css';
import '../../css/p/pypt-jb3i.css';
import '../../css/y/y7h3tbrbg.css';
import '../../css/z/z1b2ktb9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="px_yz9bks"/><path class="pypt-jb3i"/><path class="y7h3tbrbg"/><path class="z1b2ktb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:scale"} {...others} />);
}

export default Component;
