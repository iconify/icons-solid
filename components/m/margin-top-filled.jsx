import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa8hv5m4d.css';
import '../../css/x/xn18y8bul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pa8hv5m4d"/><rect class="xn18y8bul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:margin-top-filled"} {...others} />);
}

export default Component;
