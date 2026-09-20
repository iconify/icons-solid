import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3u6_3b8i.css';
import '../../css/f/fg0j46bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3u6_3b8i"/><path class="fg0j46bvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:sync-exclamation"} {...others} />);
}

export default Component;
