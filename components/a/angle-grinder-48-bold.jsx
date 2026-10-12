import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1sv60b0b.css';
import '../../css/j/jls6yjbxr.css';
import '../../css/j/j_dws6b2p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f1sv60b0b"/><path class="jls6yjbxr"/><path class="j_dws6b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:angle-grinder-48-bold"} {...others} />);
}

export default Component;
