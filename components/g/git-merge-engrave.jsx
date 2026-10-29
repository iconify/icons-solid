import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p16a97b5q.css';
import '../../css/c/c-rpqrb2u.css';
import '../../css/i/ii6dtkbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p16a97b5q wm-k"/><path class="c-rpqrb2u wm-shadow"/><path class="ii6dtkbwz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-merge-engrave"} {...others} />);
}

export default Component;
