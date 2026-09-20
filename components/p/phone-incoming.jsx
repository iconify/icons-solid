import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-djw4b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-djw4b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:phone-incoming"} {...others} />);
}

export default Component;
