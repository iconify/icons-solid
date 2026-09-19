import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9wvyeb-k.css';
import '../../css/j/jso3jy2en.css';
import '../../css/c/czglw1bjh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="w9wvyeb-k"/><path class="jso3jy2en"/><path class="czglw1bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-word-twotone"} {...others} />);
}

export default Component;
