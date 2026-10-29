import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s4smqub5w.css';
import '../../css/o/oycvfsbjh.css';
import '../../css/g/g72t0rbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="s4smqub5w"/><path class="oycvfsbjh wm-a"/><path class="g72t0rbmk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stamp-solid"} {...others} />);
}

export default Component;
