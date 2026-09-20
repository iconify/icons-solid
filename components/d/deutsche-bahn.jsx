import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8wk1ccmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8wk1ccmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:deutsche-bahn"} {...others} />);
}

export default Component;
