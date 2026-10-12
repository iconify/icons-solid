import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmrz05b8p.css';
import '../../css/l/lkb_ezk6v.css';
import '../../css/q/qu9dgbc3u.css';
import '../../css/y/y0_nejb9w.css';
import '../../css/j/j71-w0r7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kmrz05b8p"/><path class="lkb_ezk6v"/><path class="qu9dgbc3u"/><rect class="y0_nejb9w"/><path class="j71-w0r7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-lock"} {...others} />);
}

export default Component;
