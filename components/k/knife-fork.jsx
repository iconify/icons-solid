import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw2qqyvrp.css';
import '../../css/k/kuweadcxn.css';
import '../../css/a/au3i8qbhp.css';
import '../../css/b/bfb60nbvk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jw2qqyvrp"/><path class="kuweadcxn"/><path class="au3i8qbhp"/><path class="bfb60nbvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:knife-fork"} {...others} />);
}

export default Component;
