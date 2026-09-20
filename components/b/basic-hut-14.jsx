import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulqrrq9dh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ulqrrq9dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:basic-hut-14"} {...others} />);
}

export default Component;
