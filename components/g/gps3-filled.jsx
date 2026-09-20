import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vze3wnqfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vze3wnqfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gps3-filled"} {...others} />);
}

export default Component;
