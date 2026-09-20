import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7wsv_23k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n7wsv_23k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:internet-explorer"} {...others} />);
}

export default Component;
