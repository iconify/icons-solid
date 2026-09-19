import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/t/t77t6gbxy.css';
import '../../css/g/ga300c6qn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="t77t6gbxy"/><path class="ga300c6qn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:long-arrow-left-up-solid"} {...others} />);
}

export default Component;
