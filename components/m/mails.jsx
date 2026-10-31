import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cwf5s3o1h.css';
import '../../css/e/e_86leb7d.css';
import '../../css/d/d-qchbxyw.css';
import '../../css/x/x1va1ccum.css';
import '../../css/x/x33z69b1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cwf5s3o1h wm-shadow"/><path class="e_86leb7d wm-shadow"/><path class="d-qchbxyw"/><path class="x1va1ccum"/><path class="x33z69b1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mails"} {...others} />);
}

export default Component;
