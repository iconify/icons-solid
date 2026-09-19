import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bieyuq2ue.css';
import '../../css/d/d9or84w3r.css';
import '../../css/f/frytnybvc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="bieyuq2ue"/><path clip-rule="evenodd" class="d9or84w3r"/><path class="frytnybvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vomitting"} {...others} />);
}

export default Component;
