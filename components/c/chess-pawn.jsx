import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/w/w9rqjacqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="dtl23o_xq"/><path class="w9rqjacqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:chess-pawn"} {...others} />);
}

export default Component;
