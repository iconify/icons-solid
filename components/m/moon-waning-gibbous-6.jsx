import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g53dd3b6v.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="g53dd3b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-waning-gibbous-6"} {...others} />);
}

export default Component;
