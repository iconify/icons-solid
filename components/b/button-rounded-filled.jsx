import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waa-_0dyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="waa-_0dyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:button-rounded-filled"} {...others} />);
}

export default Component;
