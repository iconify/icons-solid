import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqbcb6i-q.css';
import '../../css/b/b8605kmfe.css';
import '../../css/z/zom_7r8uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aqbcb6i-q"/><path class="b8605kmfe"/><path clip-rule="evenodd" class="zom_7r8uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ac-duotone"} {...others} />);
}

export default Component;
