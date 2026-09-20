import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cew6qzb9g.css';
import '../../css/p/pokbxdbwl.css';
import '../../css/p/pw6jidbde.css';
import '../../css/v/vfk2fobjb.css';
import '../../css/c/cvynsbb0t.css';
import '../../css/y/yc74t1bie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cew6qzb9g"/><path class="pokbxdbwl"/><path clip-rule="evenodd" class="pw6jidbde"/><path class="vfk2fobjb"/><path clip-rule="evenodd" class="cvynsbb0t"/><path class="yc74t1bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:sprout-duo"} {...others} />);
}

export default Component;
