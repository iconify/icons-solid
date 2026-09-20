import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2l8rhbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2l8rhbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wikimedia-foundation"} {...others} />);
}

export default Component;
