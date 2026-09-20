import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwe1n2brt.css';
import '../../css/g/g_zd9bbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwe1n2brt"/><path class="g_zd9bbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:location-parking-place-filled"} {...others} />);
}

export default Component;
