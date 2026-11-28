import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylj6s1ump.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ylj6s1ump"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:lightbulb"} {...others} />);
}

export default Component;
