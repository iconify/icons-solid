import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gef9zeb8w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gef9zeb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:resize-full-screen"} {...others} />);
}

export default Component;
