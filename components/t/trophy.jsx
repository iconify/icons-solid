import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf9v7e-3b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pf9v7e-3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:trophy"} {...others} />);
}

export default Component;
