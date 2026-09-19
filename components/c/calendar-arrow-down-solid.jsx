import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/o/o-pt11boq.css';
import '../../css/u/uonmanbjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="o-pt11boq"/><path class="uonmanbjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:calendar-arrow-down-solid"} {...others} />);
}

export default Component;
