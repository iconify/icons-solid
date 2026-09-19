import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv5dp4p7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gv5dp4p7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-u100"} {...others} />);
}

export default Component;
