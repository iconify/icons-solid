import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p3rrodb9i.css';
import '../../css/k/kszlepbvc.css';
import '../../css/h/hvq22mbdj.css';
import '../../css/d/dzfvxdqkh.css';
import '../../css/i/iw-6j_5nd.css';
import '../../css/p/phhqx_jbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p3rrodb9i wm-shadow"/><path class="kszlepbvc"/><path class="hvq22mbdj"/><path class="dzfvxdqkh"/><path class="iw-6j_5nd"/><path class="phhqx_jbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-monster-fluffy"} {...others} />);
}

export default Component;
