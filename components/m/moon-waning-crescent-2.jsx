import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hiw4zpdte.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="hiw4zpdte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-waning-crescent-2"} {...others} />);
}

export default Component;
