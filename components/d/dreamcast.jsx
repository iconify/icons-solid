import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpb8y2bpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpb8y2bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:dreamcast"} {...others} />);
}

export default Component;
