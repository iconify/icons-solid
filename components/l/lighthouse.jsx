import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/to0g5fatr.css';
import '../../css/w/wsep67b4p.css';
import '../../css/i/imyc303dg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="to0g5fatr"/><path class="wsep67b4p"/><path class="imyc303dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lighthouse"} {...others} />);
}

export default Component;
