import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v93_pmbkz.css';
import '../../css/m/mij3o65_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="v93_pmbkz wm-k"/><path class="mij3o65_j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-heart-gloss"} {...others} />);
}

export default Component;
