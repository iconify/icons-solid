import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipk4zab3u.css';
import '../../css/b/bgvnsfk4m.css';
import '../../css/s/s-2_26b5l.css';

const viewBox = {"width":65,"height":65,"left":148,"top":164};
const content = `<path class="ipk4zab3u"/><path class="bgvnsfk4m"/><path class="s-2_26b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:session-buddy"} {...others} />);
}

export default Component;
