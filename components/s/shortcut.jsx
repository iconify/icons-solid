import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz17t_8qe.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="tz17t_8qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:shortcut"} {...others} />);
}

export default Component;
