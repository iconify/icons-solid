import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3z9z3b1e.css';
import '../../css/t/tmlzaonmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e3z9z3b1e"/><path clip-rule="evenodd" class="tmlzaonmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:shapes-unordered-expressive"} {...others} />);
}

export default Component;
