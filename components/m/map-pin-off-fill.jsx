import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm8vhb7fj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fm8vhb7fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:map-pin-off-fill"} {...others} />);
}

export default Component;
