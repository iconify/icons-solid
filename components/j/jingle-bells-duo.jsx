import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e-u7ohb3l.css';
import '../../css/n/ny0ftf-0e.css';
import '../../css/t/t4r5p7owk.css';
import '../../css/f/fm-m90lxt.css';
import '../../css/l/ll7svlg2u.css';
import '../../css/d/d-isrd9sw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e-u7ohb3l"/><path class="ny0ftf-0e wm-a"/><path class="t4r5p7owk wm-s"/><path class="fm-m90lxt wm-s"/><path class="ll7svlg2u"/><path class="d-isrd9sw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jingle-bells-duo"} {...others} />);
}

export default Component;
