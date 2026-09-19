import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5l_tybju.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t5l_tybju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:circle-with-cross"} {...others} />);
}

export default Component;
