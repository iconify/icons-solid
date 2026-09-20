import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czxuyxj8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czxuyxj8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:take-two-interactive-software"} {...others} />);
}

export default Component;
