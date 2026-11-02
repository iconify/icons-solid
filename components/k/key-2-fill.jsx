import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la-9fub_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la-9fub_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:key-2-fill"} {...others} />);
}

export default Component;
