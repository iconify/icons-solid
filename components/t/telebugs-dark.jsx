import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiw7po6xf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oiw7po6xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:telebugs-dark"} {...others} />);
}

export default Component;
