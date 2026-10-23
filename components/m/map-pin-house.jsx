import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fvayjeujx.css';
import '../../css/i/i68kn9b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fvayjeujx"/><path class="i68kn9b9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:map-pin-house"} {...others} />);
}

export default Component;
