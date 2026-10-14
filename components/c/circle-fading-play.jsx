import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca3hu0bci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ca3hu0bci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-fading-play"} {...others} />);
}

export default Component;
