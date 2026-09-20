import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4e6zvb8j.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r4e6zvb8j"/><circle class="dtl23o_xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chess-pawn"} {...others} />);
}

export default Component;
