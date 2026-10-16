import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyoe3cbdf.css';
import '../../css/j/jkakw8j_l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vyoe3cbdf"/><path class="jkakw8j_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landslide-48"} {...others} />);
}

export default Component;
