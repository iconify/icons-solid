import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j99a2vblc.css';
import '../../css/i/i29d0zbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="j99a2vblc"/><rect class="i29d0zbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:pause"} {...others} />);
}

export default Component;
