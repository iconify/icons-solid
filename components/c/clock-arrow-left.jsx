import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4q15wlej.css';
import '../../css/v/vgzzzvbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c4q15wlej"/><path class="vgzzzvbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clock-arrow-left"} {...others} />);
}

export default Component;
