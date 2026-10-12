import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjn_unj-b.css';
import '../../css/r/rtpfhie7a.css';
import '../../css/o/o11f91szp.css';
import '../../css/l/lc9k9qb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pjn_unj-b"/><path class="rtpfhie7a"/><path class="o11f91szp"/><path class="lc9k9qb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-reply-all"} {...others} />);
}

export default Component;
