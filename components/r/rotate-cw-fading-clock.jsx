import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eagqxlbet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eagqxlbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rotate-cw-fading-clock"} {...others} />);
}

export default Component;
