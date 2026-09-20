import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpn8occcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpn8occcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:forward-waves-solid"} {...others} />);
}

export default Component;
