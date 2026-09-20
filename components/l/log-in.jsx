import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzu7m7bqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wzu7m7bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:log-in"} {...others} />);
}

export default Component;
