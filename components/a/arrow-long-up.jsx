import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxk_lacno.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fxk_lacno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:arrow-long-up"} {...others} />);
}

export default Component;
