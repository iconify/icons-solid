import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9rr8m5nl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9rr8m5nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:code-climate"} {...others} />);
}

export default Component;
