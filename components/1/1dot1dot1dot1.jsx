import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyoppmmkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oyoppmmkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:1dot1dot1dot1"} {...others} />);
}

export default Component;
