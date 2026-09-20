import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7nn73bmg.css';
import '../../css/u/ukh6i7bhi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="w7nn73bmg"/><path class="ukh6i7bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jaco-dark"} {...others} />);
}

export default Component;
