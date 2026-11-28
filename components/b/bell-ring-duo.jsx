import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjy4g2uup.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h1-ng7sis.css';
import '../../css/q/qz1c6q-lt.css';
import '../../css/v/vdo4r6_ku.css';
import '../../css/l/ldial7b_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wjy4g2uup"/><g class="dt0cm9dhy primary"><path class="h1-ng7sis"/><path class="qz1c6q-lt"/><path class="vdo4r6_ku"/><path class="ldial7b_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bell-ring-duo"} {...others} />);
}

export default Component;
