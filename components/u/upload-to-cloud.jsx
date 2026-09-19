import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp89m8b4q.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="jp89m8b4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:upload-to-cloud"} {...others} />);
}

export default Component;
