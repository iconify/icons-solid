import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqcmo_wwa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xqcmo_wwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:pushed"} {...others} />);
}

export default Component;
