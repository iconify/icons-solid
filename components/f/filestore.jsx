import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvsghrbxx.css';
import '../../css/h/hxj4a-h4s.css';
import '../../css/p/p_x9mhh4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvsghrbxx"/><path class="hxj4a-h4s"/><path class="p_x9mhh4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:filestore"} {...others} />);
}

export default Component;
