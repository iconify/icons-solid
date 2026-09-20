import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa6q3wgpa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xa6q3wgpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ace-stream-light"} {...others} />);
}

export default Component;
