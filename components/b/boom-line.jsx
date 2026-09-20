import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv_0-d7tj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dv_0-d7tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:boom-line"} {...others} />);
}

export default Component;
