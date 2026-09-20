import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie1c_b5nl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ie1c_b5nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:explore-filled"} {...others} />);
}

export default Component;
