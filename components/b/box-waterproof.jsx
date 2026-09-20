import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fkkn2_rtr.css';
import '../../css/z/zqlooet8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fkkn2_rtr"/><path class="zqlooet8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:box-waterproof"} {...others} />);
}

export default Component;
