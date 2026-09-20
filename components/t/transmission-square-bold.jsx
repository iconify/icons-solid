import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz2ti29gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wz2ti29gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transmission-square-bold"} {...others} />);
}

export default Component;
