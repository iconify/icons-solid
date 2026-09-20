import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl297vo_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wl297vo_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:signal-circle"} {...others} />);
}

export default Component;
