import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngiq-1ujy.css';
import '../../css/z/zy6f7biep.css';
import '../../css/l/l5bld93kj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ngiq-1ujy"/><path class="zy6f7biep"/><path class="l5bld93kj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-taking-bath"} {...others} />);
}

export default Component;
