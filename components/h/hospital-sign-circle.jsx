import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm-8mhb3r.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rm-8mhb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hospital-sign-circle"} {...others} />);
}

export default Component;
