import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z65frnmpc.css';
import '../../css/r/rgf_9qbzz.css';
import '../../css/m/mb6i1bdgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z65frnmpc"/><path class="rgf_9qbzz"/><path class="mb6i1bdgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:people-nearby-bold"} {...others} />);
}

export default Component;
