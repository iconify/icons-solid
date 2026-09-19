import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj9xnkblo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kj9xnkblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:yaml-alt2"} {...others} />);
}

export default Component;
