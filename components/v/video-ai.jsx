import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ycpx6cc1w.css';
import '../../css/d/dpom0hb5y.css';
import '../../css/p/pbm76tdaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ycpx6cc1w"/><path class="dpom0hb5y"/><path class="pbm76tdaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-ai"} {...others} />);
}

export default Component;
