import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la14y0b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la14y0b1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:folder-close-fill"} {...others} />);
}

export default Component;
