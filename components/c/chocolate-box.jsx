import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t6kb3_4pb.css';
import '../../css/g/g6atfsbre.css';
import '../../css/t/tb3amobba.css';
import '../../css/b/b3ozc-x5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t6kb3_4pb wm-shadow"/><path class="g6atfsbre wm-shadow"/><path class="tb3amobba"/><path class="b3ozc-x5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chocolate-box"} {...others} />);
}

export default Component;
