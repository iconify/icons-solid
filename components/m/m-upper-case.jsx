import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1dcbxwrn.css';

const viewBox = {"width":620,"height":753};
const content = `<path class="c1dcbxwrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:m-upper-case"} {...others} />);
}

export default Component;
