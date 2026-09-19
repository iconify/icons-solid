import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0nqyubyr.css';
import '../../css/e/e06raxbxf.css';
import '../../css/j/jcn5sbflp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d0nqyubyr"/><path clip-rule="evenodd" class="e06raxbxf"/><path class="jcn5sbflp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chemical-burn"} {...others} />);
}

export default Component;
