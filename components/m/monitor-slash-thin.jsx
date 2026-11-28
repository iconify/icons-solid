import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr3ujtb4j.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="nr3ujtb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:monitor-slash-thin"} {...others} />);
}

export default Component;
