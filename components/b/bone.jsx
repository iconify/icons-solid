import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nv-wc6b3i.css';
import '../../css/q/qjfvalb7c.css';
import '../../css/b/b8bujrgei.css';
import '../../css/p/p8w_t0v_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nv-wc6b3i wm-shadow"/><path class="qjfvalb7c wm-shadow"/><path class="b8bujrgei"/><path class="p8w_t0v_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bone"} {...others} />);
}

export default Component;
