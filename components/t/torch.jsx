import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4ookfb0m.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-1};
const content = `<path class="q4ookfb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:torch"} {...others} />);
}

export default Component;
