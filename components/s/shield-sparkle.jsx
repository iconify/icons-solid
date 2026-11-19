import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/re8-p8zeh.css';
import '../../css/d/d-q5cxb7z.css';
import '../../css/g/g7sss1zzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="re8-p8zeh"/><path class="d-q5cxb7z"/><path class="g7sss1zzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shield-sparkle"} {...others} />);
}

export default Component;
