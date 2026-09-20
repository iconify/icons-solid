import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhe2vibnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yhe2vibnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:keyboard-bold"} {...others} />);
}

export default Component;
