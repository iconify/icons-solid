import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t6kb3_4pb.css';
import '../../css/g/g6atfsbre.css';
import '../../css/r/roegebbwc.css';
import '../../css/i/ie38f9e7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t6kb3_4pb wm-shadow"/><path class="g6atfsbre wm-shadow"/><path class="roegebbwc"/><path class="ie38f9e7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart"} {...others} />);
}

export default Component;
