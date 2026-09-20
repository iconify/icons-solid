import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-q5-nbxj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a-q5-nbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:vihara-solid"} {...others} />);
}

export default Component;
