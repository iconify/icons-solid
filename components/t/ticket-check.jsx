import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/icyevt1yv.css';
import '../../css/t/tk9p2tbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="icyevt1yv"/><path class="tk9p2tbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ticket-check"} {...others} />);
}

export default Component;
