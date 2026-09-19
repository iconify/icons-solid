import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuj4p-a8q.css';
import '../../css/j/j8hs3szgb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vuj4p-a8q"/><path class="j8hs3szgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:tablet"} {...others} />);
}

export default Component;
