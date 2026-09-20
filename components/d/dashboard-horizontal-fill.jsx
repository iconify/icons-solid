import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz7_i0dqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dz7_i0dqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:dashboard-horizontal-fill"} {...others} />);
}

export default Component;
