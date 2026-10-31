import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e7-3r-baw.css';
import '../../css/b/bhp95cbya.css';
import '../../css/w/w2zwoobcl.css';
import '../../css/l/l_qppnbap.css';
import '../../css/g/ga8oapics.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e7-3r-baw wm-shadow"/><path class="bhp95cbya wm-shadow"/><path class="w2zwoobcl"/><path class="l_qppnbap"/><path class="ga8oapics wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:siren"} {...others} />);
}

export default Component;
