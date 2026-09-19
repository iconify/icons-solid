import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2-mbfr7w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q2-mbfr7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:resize-100"} {...others} />);
}

export default Component;
