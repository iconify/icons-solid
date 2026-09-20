import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p38vymb9k.css';
import '../../css/k/k-h9srbul.css';
import '../../css/l/lub_6wbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p38vymb9k"/><path class="k-h9srbul"/><path class="lub_6wbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layers2-duotone"} {...others} />);
}

export default Component;
