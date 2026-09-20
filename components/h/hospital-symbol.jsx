import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv6-mbbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vv6-mbbkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:hospital-symbol"} {...others} />);
}

export default Component;
