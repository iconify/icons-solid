import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfhtqhbtz.css';
import '../../css/d/du0tax8oo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pfhtqhbtz"/><path class="du0tax8oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jar-20-bold"} {...others} />);
}

export default Component;
