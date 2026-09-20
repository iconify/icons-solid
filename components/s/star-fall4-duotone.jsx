import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-4t8ebew.css';
import '../../css/x/x6-o4ybsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o-4t8ebew"/><path clip-rule="evenodd" class="x6-o4ybsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:star-fall4-duotone"} {...others} />);
}

export default Component;
