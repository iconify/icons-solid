import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-06-6rfb.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="f-06-6rfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:lifepreserver"} {...others} />);
}

export default Component;
