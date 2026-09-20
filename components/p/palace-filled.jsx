import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5tnvjb5t.css';
import '../../css/t/t-cj0obgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z5tnvjb5t"/><path class="t-cj0obgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace-filled"} {...others} />);
}

export default Component;
