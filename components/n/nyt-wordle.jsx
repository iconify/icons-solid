import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1md_z23q.css';
import '../../css/l/lo6resb1g.css';
import '../../css/n/nncz9ebus.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1md_z23q"/><path class="lo6resb1g"/><path class="nncz9ebus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-wordle"} {...others} />);
}

export default Component;
