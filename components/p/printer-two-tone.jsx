import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/inkjfzfsc.css';
import '../../css/g/gi78_zuta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="inkjfzfsc"/><path class="gi78_zuta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:printer-two-tone"} {...others} />);
}

export default Component;
