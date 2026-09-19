import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j03_z294p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j03_z294p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:500px-with-circle"} {...others} />);
}

export default Component;
