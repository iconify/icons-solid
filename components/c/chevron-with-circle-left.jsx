import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7h3fsbga.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h7h3fsbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:chevron-with-circle-left"} {...others} />);
}

export default Component;
