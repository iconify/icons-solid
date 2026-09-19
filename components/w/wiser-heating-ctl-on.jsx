import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktoyf7b8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktoyf7b8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:wiser-heating-ctl-on"} {...others} />);
}

export default Component;
