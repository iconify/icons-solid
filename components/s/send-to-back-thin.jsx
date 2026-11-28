import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7a05abhs.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="g7a05abhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:send-to-back-thin"} {...others} />);
}

export default Component;
