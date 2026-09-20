import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3fg58wzn.css';
import '../../css/g/g_zluxtrj.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="u3fg58wzn"/><path class="g_zluxtrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:briefcase-plus-1"} {...others} />);
}

export default Component;
