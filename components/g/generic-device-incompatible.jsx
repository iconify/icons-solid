import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx1la0w2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vx1la0w2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:generic-device-incompatible"} {...others} />);
}

export default Component;
