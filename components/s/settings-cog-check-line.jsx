import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sv2ktyb_y.css';
import '../../css/l/l97qpbbsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sv2ktyb_y"/><path class="l97qpbbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:settings-cog-check-line"} {...others} />);
}

export default Component;
