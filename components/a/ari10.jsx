import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4necybef.css';
import '../../css/a/a4z6_-bfl.css';
import '../../css/f/f3u9p6fad.css';
import '../../css/n/n62mo89yv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r4necybef"/><path clip-rule="evenodd" class="a4z6_-bfl"/><path class="f3u9p6fad"/><path clip-rule="evenodd" class="n62mo89yv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ari10"} {...others} />);
}

export default Component;
