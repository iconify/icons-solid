import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3mzitb5s.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="c3mzitb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:postage-stamp-thin"} {...others} />);
}

export default Component;
