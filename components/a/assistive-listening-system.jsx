import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjqhxbbwg.css';
import '../../css/g/g6xizdbtb.css';
import '../../css/o/o15x4kbqi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fjqhxbbwg"/><path class="g6xizdbtb"/><path class="o15x4kbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:assistive-listening-system"} {...others} />);
}

export default Component;
