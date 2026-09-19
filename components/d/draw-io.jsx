import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9xq4ewmx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q9xq4ewmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:draw-io"} {...others} />);
}

export default Component;
