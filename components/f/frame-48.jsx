import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8tp9mb-t.css';
import '../../css/b/bju7mh2fw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l8tp9mb-t"/><path class="bju7mh2fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frame-48"} {...others} />);
}

export default Component;
