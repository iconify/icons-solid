import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm3qzydqs.css';
import '../../css/y/yb0_9vbsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm3qzydqs"/><path class="yb0_9vbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dotenv"} {...others} />);
}

export default Component;
