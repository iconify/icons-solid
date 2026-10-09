import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woaiz3jcj.css';
import '../../css/t/t2uupdbom.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="woaiz3jcj"/><path class="t2uupdbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terminal-48-bold"} {...others} />);
}

export default Component;
