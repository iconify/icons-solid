import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ono2__bue.css';
import '../../css/f/fs244kbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ono2__bue"/><path class="fs244kbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:prism-plus"} {...others} />);
}

export default Component;
