import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-3-5ybig.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="a-3-5ybig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:people"} {...others} />);
}

export default Component;
