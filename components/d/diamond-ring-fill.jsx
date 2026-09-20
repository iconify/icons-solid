import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc2jgs14m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hc2jgs14m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:diamond-ring-fill"} {...others} />);
}

export default Component;
