import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0nf_bbgm.css';
import '../../css/q/q7mu9wb5t.css';
import '../../css/n/ne7rp1b2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0nf_bbgm"/><circle class="q7mu9wb5t"/><path class="ne7rp1b2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:institution"} {...others} />);
}

export default Component;
