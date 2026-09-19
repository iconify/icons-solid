import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trs6t6_2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trs6t6_2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:doube-window-closed"} {...others} />);
}

export default Component;
