import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xabgcobot.css';
import '../../css/r/r70kjmzup.css';
import '../../css/t/t_ev7s-sv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-path="url(#SVGGJ5CPOeH)" class="cuyn6tgcc"><path class="xabgcobot"/><path clip-rule="evenodd" class="r70kjmzup"/></g><defs><clipPath id="SVGGJ5CPOeH"><path class="t_ev7s-sv"/></clipPath></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:new-24"} {...others} />);
}

export default Component;
