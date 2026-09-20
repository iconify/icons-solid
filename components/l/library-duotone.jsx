import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjdbrm5lb.css';
import '../../css/h/h8auu-0yw.css';
import '../../css/f/fwxnfntjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bjdbrm5lb"/><path class="h8auu-0yw"/><path class="fwxnfntjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:library-duotone"} {...others} />);
}

export default Component;
