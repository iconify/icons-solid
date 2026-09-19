import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4si8guta.css';

const viewBox = {"width":2048,"height":1792};
const content = `<path class="h4si8guta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:connectdevelop"} {...others} />);
}

export default Component;
