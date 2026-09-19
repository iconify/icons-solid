import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mu9bddh4x.css';
import '../../css/e/ekyn8cc0w.css';
import '../../css/c/cnzf-abva.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="mu9bddh4x"/><path class="ekyn8cc0w"/><path class="cnzf-abva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:layers"} {...others} />);
}

export default Component;
