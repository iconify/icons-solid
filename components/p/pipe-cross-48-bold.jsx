import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jycek3qdf.css';
import '../../css/a/aow2a9b7q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jycek3qdf"/><path class="aow2a9b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-cross-48-bold"} {...others} />);
}

export default Component;
