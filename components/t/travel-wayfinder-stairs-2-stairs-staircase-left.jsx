import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3o-hk-9l.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h3o-hk-9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-wayfinder-stairs-2-stairs-staircase-left"} {...others} />);
}

export default Component;
