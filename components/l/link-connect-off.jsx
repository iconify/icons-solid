import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_2-wm1dt.css';
import '../../css/h/h1kwy887u.css';
import '../../css/e/ez7ms9bna.css';
import '../../css/x/x39i3fbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s_2-wm1dt"/><rect transform="matrix(0 -1 -1 0 22.28 19.17)" class="h1kwy887u"/><rect transform="matrix(0 -1 -1 0 15.43 14.73)" class="ez7ms9bna"/><path class="x39i3fbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:link-connect-off"} {...others} />);
}

export default Component;
