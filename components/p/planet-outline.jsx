import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd-4zjz7r.css';
import '../../css/o/ohm6g2bps.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pd-4zjz7r"/><circle class="ohm6g2bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:planet-outline"} {...others} />);
}

export default Component;
