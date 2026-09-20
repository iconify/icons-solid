import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgk54msjl.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wgk54msjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:email-send-filled"} {...others} />);
}

export default Component;
