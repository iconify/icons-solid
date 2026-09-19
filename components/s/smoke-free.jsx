import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4va6x1fs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q4va6x1fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:smoke-free"} {...others} />);
}

export default Component;
