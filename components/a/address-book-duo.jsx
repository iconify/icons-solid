import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/at20z_l8q.css';
import '../../css/p/p568vbblp.css';
import '../../css/c/coff_0a1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="at20z_l8q"/><path class="p568vbblp wm-a"/><path class="coff_0a1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:address-book-duo"} {...others} />);
}

export default Component;
