import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur7q7lb5k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ur7q7lb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:steam-symbol"} {...others} />);
}

export default Component;
