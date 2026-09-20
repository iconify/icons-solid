import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw_83acpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sw_83acpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:add-friends-filled"} {...others} />);
}

export default Component;
