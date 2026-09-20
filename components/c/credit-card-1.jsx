import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/myw987e2z.css';
import '../../css/i/icpbwx0_p.css';
import '../../css/p/pm7x3xh2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="myw987e2z"/><path class="icpbwx0_p"/><path class="pm7x3xh2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:credit-card-1"} {...others} />);
}

export default Component;
