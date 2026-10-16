import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt8maz9hk.css';
import '../../css/f/f2c2p1hyc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vt8maz9hk"/><path class="f2c2p1hyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-hybrid-20"} {...others} />);
}

export default Component;
