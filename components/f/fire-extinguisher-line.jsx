import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvb0yvbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvb0yvbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fire-extinguisher-line"} {...others} />);
}

export default Component;
