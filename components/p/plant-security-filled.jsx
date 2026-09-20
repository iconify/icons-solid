import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dync3v64e.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="dync3v64e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:plant-security-filled"} {...others} />);
}

export default Component;
