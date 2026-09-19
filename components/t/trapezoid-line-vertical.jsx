import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h2g8illxq.css';
import '../../css/j/jj2u1oblq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h2g8illxq"/><path class="jj2u1oblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trapezoid-line-vertical"} {...others} />);
}

export default Component;
