import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etk58nhhr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="etk58nhhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:llama-cpp-light"} {...others} />);
}

export default Component;
