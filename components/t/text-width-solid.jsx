import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-9_lojyo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j-9_lojyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:text-width-solid"} {...others} />);
}

export default Component;
