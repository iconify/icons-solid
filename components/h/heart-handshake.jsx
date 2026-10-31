import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lvnu-lb5o.css';
import '../../css/b/bfjpyhaia.css';
import '../../css/x/x4m9qttma.css';
import '../../css/i/ikpeibcxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lvnu-lb5o wm-shadow"/><path class="bfjpyhaia wm-shadow"/><path class="x4m9qttma"/><path class="ikpeibcxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-handshake"} {...others} />);
}

export default Component;
