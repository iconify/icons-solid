import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l97nb-quh.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="l97nb-quh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-wifi-0"} {...others} />);
}

export default Component;
