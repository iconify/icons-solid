import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v_mf6nbvh.css';
import '../../css/y/ybsqlk_rx.css';
import '../../css/v/vdc6itbws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v_mf6nbvh"/><path class="ybsqlk_rx"/><path class="vdc6itbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cap-straight"} {...others} />);
}

export default Component;
