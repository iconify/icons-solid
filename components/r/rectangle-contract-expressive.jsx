import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2t8j6bes.css';
import '../../css/p/phqgcjkku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n2t8j6bes"/><path clip-rule="evenodd" class="phqgcjkku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:rectangle-contract-expressive"} {...others} />);
}

export default Component;
