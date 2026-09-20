import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1pb_cbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1pb_cbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:safe-flash-line"} {...others} />);
}

export default Component;
