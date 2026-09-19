import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/ssh2mccsr.css';
import '../../css/a/ao6eqs1zd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ssh2mccsr"/><path class="ao6eqs1zd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:contact-book"} {...others} />);
}

export default Component;
