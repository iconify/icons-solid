import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c4vdbmbtb.css';
import '../../css/x/xs5smy_1q.css';
import '../../css/n/nq3eg7a1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c4vdbmbtb wm-shadow"/><path class="wm-shadow xs5smy_1q"/><path class="nq3eg7a1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-tree"} {...others} />);
}

export default Component;
