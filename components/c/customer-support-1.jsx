import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gduwnmbbp.css';
import '../../css/u/u-4i8s-1c.css';
import '../../css/q/q3k5j6b6y.css';
import '../../css/i/ik6xaoppb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gduwnmbbp"/><path class="u-4i8s-1c"/><path class="q3k5j6b6y"/><path class="ik6xaoppb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:customer-support-1"} {...others} />);
}

export default Component;
