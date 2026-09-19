import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwt8ncc8u.css';

const viewBox = {"width":448,"height":488};
const content = `<path class="lwt8ncc8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:xing"} {...others} />);
}

export default Component;
