import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clczj4b0b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="clczj4b0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:grid-3x3-stroke-20"} {...others} />);
}

export default Component;
