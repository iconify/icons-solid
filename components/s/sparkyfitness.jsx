import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyogtrxua.css';

const viewBox = {"width":517.4,"height":517.4,"left":74.1,"top":22.2};
const content = `<path class="cyogtrxua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sparkyfitness"} {...others} />);
}

export default Component;
