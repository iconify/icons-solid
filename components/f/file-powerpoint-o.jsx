import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8nsyd_1z.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="j8nsyd_1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:file-powerpoint-o"} {...others} />);
}

export default Component;
