import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aoexxpy5g.css';
import '../../css/l/l_kvvrcsk.css';
import '../../css/p/p3hadrdis.css';
import '../../css/f/f-9on35bf.css';
import '../../css/u/umjjezbyr.css';
import '../../css/b/bcecr5beb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="aoexxpy5g"/><path class="l_kvvrcsk"/><circle class="p3hadrdis"/><path class="f-9on35bf"/><circle class="umjjezbyr"/><path class="bcecr5beb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bullet-list-tree"} {...others} />);
}

export default Component;
