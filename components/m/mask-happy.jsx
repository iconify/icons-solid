import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5wplb8az.css';
import '../../css/v/vh953qb-o.css';
import '../../css/n/n3064hbxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o5wplb8az"/><path clip-rule="evenodd" class="vh953qb-o"/><path class="n3064hbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mask-happy"} {...others} />);
}

export default Component;
