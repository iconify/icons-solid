import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4vs8xdmz.css';

const viewBox = {"width":512,"height":1024};
const content = `<path class="y4vs8xdmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:vial"} {...others} />);
}

export default Component;
