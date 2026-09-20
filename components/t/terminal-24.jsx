import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly4hycbgl.css';
import '../../css/c/cle0u0bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ly4hycbgl"/><path class="cle0u0bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:terminal-24"} {...others} />);
}

export default Component;
