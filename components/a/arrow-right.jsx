import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6vg5ubaa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l6vg5ubaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:arrow-right"} {...others} />);
}

export default Component;
