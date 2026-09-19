import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojdde1gbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojdde1gbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-hub-n15-g2"} {...others} />);
}

export default Component;
