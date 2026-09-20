import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w5lai7qfi.css';
import '../../css/f/f94ukvjsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w5lai7qfi"/><circle class="f94ukvjsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:dollar-circle"} {...others} />);
}

export default Component;
