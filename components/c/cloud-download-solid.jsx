import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/id1-12b0u.css';
import '../../css/u/uh72fu0ru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="id1-12b0u"/><path class="uh72fu0ru wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-download-solid"} {...others} />);
}

export default Component;
