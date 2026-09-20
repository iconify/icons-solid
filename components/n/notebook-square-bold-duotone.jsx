import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c4z116bnm.css';
import '../../css/f/ftrssobwy.css';
import '../../css/l/lv9n1n5sk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c4z116bnm"/><path class="ftrssobwy"/><path class="lv9n1n5sk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-square-bold-duotone"} {...others} />);
}

export default Component;
