import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1wohmrfu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h1wohmrfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:car-wheel-with-tire"} {...others} />);
}

export default Component;
