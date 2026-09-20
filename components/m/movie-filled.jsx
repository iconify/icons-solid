import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdkghbc_x.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="fdkghbc_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:movie-filled"} {...others} />);
}

export default Component;
