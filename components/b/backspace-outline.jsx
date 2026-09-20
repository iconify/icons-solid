import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxx9vvbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxx9vvbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:backspace-outline"} {...others} />);
}

export default Component;
