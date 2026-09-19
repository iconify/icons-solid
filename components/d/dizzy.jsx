import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b35t7ivdn.css';
import '../../css/a/a3u8wvb3i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b35t7ivdn"/><path class="a3u8wvb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dizzy"} {...others} />);
}

export default Component;
