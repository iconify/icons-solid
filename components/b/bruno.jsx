import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgqejvb_u.css';
import '../../css/j/jcx6hxbdf.css';
import '../../css/x/xrbve6iev.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cgqejvb_u"/><path class="jcx6hxbdf"/><path class="xrbve6iev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:bruno"} {...others} />);
}

export default Component;
