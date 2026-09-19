import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5nmllbgc.css';
import '../../css/m/m3qb8jb6u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="t5nmllbgc"/><path class="m3qb8jb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mongoose"} {...others} />);
}

export default Component;
