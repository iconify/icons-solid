import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfk2zh8ck.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="jfk2zh8ck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:app-document-filled"} {...others} />);
}

export default Component;
