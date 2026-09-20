import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3c57fbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o3c57fbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:egg-crack-line"} {...others} />);
}

export default Component;
