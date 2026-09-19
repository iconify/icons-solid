import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ig6egccad.css';
import '../../css/s/s5kl10b-b.css';
import '../../css/u/u721mxb4o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ig6egccad"/><path class="s5kl10b-b"/><path clip-rule="evenodd" class="u721mxb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mosquito-collection-negative"} {...others} />);
}

export default Component;
