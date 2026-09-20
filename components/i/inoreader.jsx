import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4lt8ebvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4lt8ebvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:inoreader"} {...others} />);
}

export default Component;
