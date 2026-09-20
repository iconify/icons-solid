import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2tai6bap.css';
import '../../css/c/cgpqwab7t.css';
import '../../css/p/p_ely1eej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f2tai6bap"/><path class="cgpqwab7t"/><path clip-rule="evenodd" class="p_ely1eej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-rotate2-duotone"} {...others} />);
}

export default Component;
