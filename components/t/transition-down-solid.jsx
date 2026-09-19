import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/c/cfb94c_oh.css';
import '../../css/j/jm1_ttvqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="cfb94c_oh"/><path class="jm1_ttvqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:transition-down-solid"} {...others} />);
}

export default Component;
