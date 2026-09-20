import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-q11zbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-q11zbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bitcoin"} {...others} />);
}

export default Component;
