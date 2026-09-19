import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvf-ryl3u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wvf-ryl3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:tectile"} {...others} />);
}

export default Component;
