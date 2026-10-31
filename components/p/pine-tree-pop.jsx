import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omq6avb4v.css';
import '../../css/u/ubee5s7hy.css';
import '../../css/r/r763xj6dy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="omq6avb4v"/><path class="ubee5s7hy"/><path class="r763xj6dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pine-tree-pop"} {...others} />);
}

export default Component;
