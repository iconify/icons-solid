import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm7s0jbso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nm7s0jbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:echo-dot-gen-4-clock"} {...others} />);
}

export default Component;
