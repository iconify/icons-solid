import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m24q4o26z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m24q4o26z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:boom-box-fill"} {...others} />);
}

export default Component;
