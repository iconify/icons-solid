import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k77tqcqcu.css';
import '../../css/j/jk2unp63q.css';
import '../../css/a/a9zj7tg5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k77tqcqcu"/><path class="jk2unp63q"/><path class="a9zj7tg5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-shine-duotone"} {...others} />);
}

export default Component;
