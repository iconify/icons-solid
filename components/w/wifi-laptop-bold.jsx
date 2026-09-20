import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxgd-b81d.css';
import '../../css/m/mxzgrlbhg.css';
import '../../css/f/frbtlhrdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxgd-b81d"/><path class="mxzgrlbhg"/><path class="frbtlhrdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wifi-laptop-bold"} {...others} />);
}

export default Component;
