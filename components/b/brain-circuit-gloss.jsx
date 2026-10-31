import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/whgxjacxf.css';
import '../../css/z/zu2hgbs9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="whgxjacxf wm-k"/><path class="wm-a zu2hgbs9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-circuit-gloss"} {...others} />);
}

export default Component;
