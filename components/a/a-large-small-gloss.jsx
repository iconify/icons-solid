import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e_lg5ubec.css';
import '../../css/g/gb_2bdcnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="e_lg5ubec wm-k"/><path class="gb_2bdcnx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:a-large-small-gloss"} {...others} />);
}

export default Component;
