import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0e__ebzz.css';
import '../../css/e/ejsf3nw9l.css';
import '../../css/g/ggo40objl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q0e__ebzz"/><path class="ejsf3nw9l"/><path class="ggo40objl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bot-48"} {...others} />);
}

export default Component;
