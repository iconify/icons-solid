import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi2oy9bdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi2oy9bdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:volume-vibrate-fill"} {...others} />);
}

export default Component;
