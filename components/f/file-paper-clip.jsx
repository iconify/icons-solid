import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tl5t3--9r.css';
import '../../css/z/zx4vpbn8m.css';
import '../../css/s/ss3vr3z2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tl5t3--9r"/><path class="zx4vpbn8m"/><path class="ss3vr3z2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-paper-clip"} {...others} />);
}

export default Component;
