import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3clwtb7p.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/d/dt8z6xb6l.css';
import '../../css/i/iq7gmc7md.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h3clwtb7p"/><ellipse class="h_l78yaxm"/><path class="dt8z6xb6l"/><path class="iq7gmc7md"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-search"} {...others} />);
}

export default Component;
