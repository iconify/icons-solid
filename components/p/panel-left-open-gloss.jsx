import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v1jlkd44n.css';
import '../../css/i/ish0hcbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="v1jlkd44n wm-k"/><path class="ish0hcbub wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-left-open-gloss"} {...others} />);
}

export default Component;
