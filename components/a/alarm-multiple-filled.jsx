import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce70qkbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ce70qkbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:alarm-multiple-filled"} {...others} />);
}

export default Component;
