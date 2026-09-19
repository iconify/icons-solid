import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n9rbf1bht.css';
import '../../css/m/m01t94b2t.css';
import '../../css/k/km16y_bdy.css';
import '../../css/x/xedkehooy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="n9rbf1bht"/><path class="m01t94b2t"/><path class="km16y_bdy"/><path class="xedkehooy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:christmas-tree"} {...others} />);
}

export default Component;
