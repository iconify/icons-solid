import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxvlt1s6e.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nxvlt1s6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:frankenphp"} {...others} />);
}

export default Component;
