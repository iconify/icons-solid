import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaol0eb1k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aaol0eb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:houzz"} {...others} />);
}

export default Component;
