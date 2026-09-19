import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj8k4mbbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj8k4mbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-circle-half"} {...others} />);
}

export default Component;
