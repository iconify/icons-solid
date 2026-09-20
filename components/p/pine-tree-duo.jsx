import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/triuozb4n.css';
import '../../css/o/o7pfzdi5k.css';
import '../../css/q/q-w-8ydma.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="triuozb4n"/><path class="o7pfzdi5k"/><path class="q-w-8ydma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pine-tree-duo"} {...others} />);
}

export default Component;
