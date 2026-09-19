import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahhe4s6pz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ahhe4s6pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:yaml-alt1"} {...others} />);
}

export default Component;
