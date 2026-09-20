import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izhxi_b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="izhxi_b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:bookmark-3-fill"} {...others} />);
}

export default Component;
