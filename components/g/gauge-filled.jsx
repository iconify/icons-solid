import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4ov4gbsd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o4ov4gbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:gauge-filled"} {...others} />);
}

export default Component;
