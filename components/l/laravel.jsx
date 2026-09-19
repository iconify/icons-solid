import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpgg-p1ur.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tpgg-p1ur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:laravel"} {...others} />);
}

export default Component;
