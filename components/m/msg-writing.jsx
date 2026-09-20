import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amzadabst.css';
import '../../css/d/dyxn8wbmd.css';
import '../../css/q/q4stomzyj.css';
import '../../css/h/ho31hqnzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="amzadabst"/><path class="dyxn8wbmd"/><path class="q4stomzyj"/><path class="ho31hqnzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:msg-writing"} {...others} />);
}

export default Component;
