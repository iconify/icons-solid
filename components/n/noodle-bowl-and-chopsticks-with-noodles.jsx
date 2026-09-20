import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woy7o0ttp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="woy7o0ttp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:noodle-bowl-and-chopsticks-with-noodles"} {...others} />);
}

export default Component;
