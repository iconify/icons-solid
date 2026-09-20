import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptedp6bhh.css';
import '../../css/x/xat9ymb7w.css';
import '../../css/t/thrb5hbfs.css';

const viewBox = {"width":256,"height":116};
const content = `<path class="ptedp6bhh"/><path class="xat9ymb7w"/><path class="thrb5hbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cloudflare"} {...others} />);
}

export default Component;
