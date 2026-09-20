import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irve6l9sy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irve6l9sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:finger-swipe-line"} {...others} />);
}

export default Component;
