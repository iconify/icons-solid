import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv90lrb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gv90lrb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:diving-scuba-flag"} {...others} />);
}

export default Component;
