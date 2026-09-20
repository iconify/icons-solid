import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrdwenu5p.css';
import '../../css/f/f536ghksd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qrdwenu5p"/><path class="f536ghksd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-cry"} {...others} />);
}

export default Component;
