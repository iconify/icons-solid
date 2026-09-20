import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp6bi2wym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fp6bi2wym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrow-down-circle-line"} {...others} />);
}

export default Component;
