import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkkjs4bjp.css';
import '../../css/u/uwu_w82bn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkkjs4bjp"/><path class="uwu_w82bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:swftc"} {...others} />);
}

export default Component;
