import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fa2_mdbyf.css';
import '../../css/j/jcqo197tm.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(4 1)" class="bi12bsetm"><path class="fa2_mdbyf"/><circle class="jcqo197tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:door-alt"} {...others} />);
}

export default Component;
