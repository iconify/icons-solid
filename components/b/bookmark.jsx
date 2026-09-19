import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u78g5fodw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u78g5fodw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:bookmark"} {...others} />);
}

export default Component;
