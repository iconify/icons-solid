import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy_9-78me.css';
import '../../css/k/kmix8d4jl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sy_9-78me"/><path class="kmix8d4jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:architecture-hui-style-filled"} {...others} />);
}

export default Component;
