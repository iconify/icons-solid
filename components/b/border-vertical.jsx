import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-wx6dlth.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l-wx6dlth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:border-vertical"} {...others} />);
}

export default Component;
