import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp-eqwb-s.css';
import '../../css/d/d3h638b2w.css';
import '../../css/p/proq9kbbu.css';
import '../../css/w/w2buv6b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rp-eqwb-s"/><path class="d3h638b2w"/><path class="proq9kbbu"/><path class="w2buv6b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace-2"} {...others} />);
}

export default Component;
