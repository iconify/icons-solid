import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jia142bum.css';
import '../../css/c/c86vi3bcr.css';
import '../../css/n/n8xhjmb-g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jia142bum"/><path class="c86vi3bcr"/><path class="n8xhjmb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:signal-strength"} {...others} />);
}

export default Component;
