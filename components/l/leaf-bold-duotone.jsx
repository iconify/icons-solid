import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smtanqb6k.css';
import '../../css/q/q536y2b8e.css';
import '../../css/a/avshsaceu.css';
import '../../css/y/yzavun0dg.css';
import '../../css/p/p-py5wbde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="smtanqb6k"/><path class="q536y2b8e"/><path class="avshsaceu"/><path class="yzavun0dg"/><path class="p-py5wbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:leaf-bold-duotone"} {...others} />);
}

export default Component;
