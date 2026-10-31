import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/roesr2bch.css';
import '../../css/w/wo0uzib6g.css';
import '../../css/s/syi3z2buw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="roesr2bch wm-k"/><path class="wm-a wo0uzib6g"/><path class="syi3z2buw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-plus-gloss"} {...others} />);
}

export default Component;
