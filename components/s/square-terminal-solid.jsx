import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmxa-c6qf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmxa-c6qf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-terminal-solid"} {...others} />);
}

export default Component;
