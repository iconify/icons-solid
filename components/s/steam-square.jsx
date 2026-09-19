import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf8qucwjx.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="hf8qucwjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:steam-square"} {...others} />);
}

export default Component;
