import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ati6izcqr.css';
import '../../css/o/oeud78yma.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ati6izcqr"/><path class="oeud78yma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:american-football"} {...others} />);
}

export default Component;
