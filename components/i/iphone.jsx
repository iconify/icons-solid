import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbo7vsg8x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fbo7vsg8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:iphone"} {...others} />);
}

export default Component;
