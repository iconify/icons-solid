import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bz5i6qhaf.css';
import '../../css/l/lnzpgcbxn.css';
import '../../css/u/uomubg4id.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="bz5i6qhaf"/><path class="lnzpgcbxn"/><path class="uomubg4id"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:goblet"} {...others} />);
}

export default Component;
