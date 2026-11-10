import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o11f91szp.css';
import '../../css/l/lc9k9qb3h.css';
import '../../css/y/yk8wpcb-k.css';
import '../../css/c/cm761ibon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o11f91szp"/><path class="lc9k9qb3h"/><path class="yk8wpcb-k"/><path class="cm761ibon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-reply-all"} {...others} />);
}

export default Component;
