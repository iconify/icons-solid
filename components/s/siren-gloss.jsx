import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/skue08b8m.css';
import '../../css/x/x3mbdo00s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="skue08b8m wm-k"/><path class="wm-s x3mbdo00s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:siren-gloss"} {...others} />);
}

export default Component;
