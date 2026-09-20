import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gybadhj-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gybadhj-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:lira-octagon-solid"} {...others} />);
}

export default Component;
