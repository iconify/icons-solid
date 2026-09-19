import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8stoqb6v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b8stoqb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:sound-mute"} {...others} />);
}

export default Component;
