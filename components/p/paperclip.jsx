import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh06d-lgt.css';
import '../../css/a/ax79-fbtj.css';
import '../../css/o/opf-syz9t.css';
import '../../css/r/rfh4bmiht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sh06d-lgt wm-k"/><path class="ax79-fbtj wm-k"/><path class="opf-syz9t wm-k"/><path class="rfh4bmiht wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:paperclip"} {...others} />);
}

export default Component;
