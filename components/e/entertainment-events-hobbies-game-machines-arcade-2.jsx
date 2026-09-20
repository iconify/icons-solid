import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2ip6qb2q.css';
import '../../css/j/jdp4u-8vv.css';
import '../../css/d/d0v_wkbug.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y2ip6qb2q"/><path class="jdp4u-8vv"/><path class="d0v_wkbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-game-machines-arcade-2"} {...others} />);
}

export default Component;
