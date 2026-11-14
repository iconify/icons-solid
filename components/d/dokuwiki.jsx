import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhhnylclq.css';
import '../../css/s/swsfj8b4r.css';
import '../../css/l/l2ylshpug.css';
import '../../css/y/y05yz_bzk.css';
import '../../css/p/p2y4zf_7t.css';
import '../../css/w/we03z7ntr.css';
import '../../css/v/vkzzy70fh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rhhnylclq"/><path class="swsfj8b4r"/><path class="l2ylshpug"/><path class="y05yz_bzk"/><path class="p2y4zf_7t"/><path class="we03z7ntr"/><path class="vkzzy70fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dokuwiki"} {...others} />);
}

export default Component;
