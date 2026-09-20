import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf4--fboj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hf4--fboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:kaaba"} {...others} />);
}

export default Component;
