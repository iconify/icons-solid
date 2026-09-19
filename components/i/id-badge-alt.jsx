import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0yqz5ohm.css';

const viewBox = {"width":2368,"height":1792};
const content = `<path class="j0yqz5ohm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:id-badge-alt"} {...others} />);
}

export default Component;
