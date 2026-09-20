import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsc0ufgkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsc0ufgkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:apple-keyboard-shift"} {...others} />);
}

export default Component;
