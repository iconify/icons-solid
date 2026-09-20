import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haieeyb3k.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="haieeyb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:search"} {...others} />);
}

export default Component;
