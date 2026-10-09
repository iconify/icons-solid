import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llfrr31qw.css';
import '../../css/h/hqz3w2b_j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="llfrr31qw"/><path class="hqz3w2b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:highlighter-48"} {...others} />);
}

export default Component;
