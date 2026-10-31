import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/th3if11oc.css';
import '../../css/o/o-n-fog1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="th3if11oc wm-k"/><path class="o-n-fog1d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dhak-gloss"} {...others} />);
}

export default Component;
