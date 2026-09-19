import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tkz1d8fvs.css';
import '../../css/a/axl_d5b5w.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><circle class="tkz1d8fvs"/><path clip-rule="evenodd" class="axl_d5b5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:circle-print"} {...others} />);
}

export default Component;
