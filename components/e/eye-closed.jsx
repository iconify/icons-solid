import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgk6z6b-l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bgk6z6b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:eye-closed"} {...others} />);
}

export default Component;
