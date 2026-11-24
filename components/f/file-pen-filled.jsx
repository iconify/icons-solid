import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq7fbvbpx.css';
import '../../css/p/pj3mk0brx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uq7fbvbpx"/><path class="pj3mk0brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-pen-filled"} {...others} />);
}

export default Component;
