import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do6504b1e.css';
import '../../css/w/wpronf74j.css';
import '../../css/w/ws37avcxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="do6504b1e"/><path class="wpronf74j"/><path class="ws37avcxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-circle-outline"} {...others} />);
}

export default Component;
