import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mlofo-y7y.css';
import '../../css/a/aukjmk-qq.css';
import '../../css/n/nq38fhacn.css';
import '../../css/c/ckpths51c.css';
import '../../css/o/omglayz4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mlofo-y7y wm-shadow"/><path class="aukjmk-qq wm-shadow"/><path class="nq38fhacn"/><path class="ckpths51c"/><path class="omglayz4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shapes"} {...others} />);
}

export default Component;
