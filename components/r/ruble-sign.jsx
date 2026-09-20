import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2tu_cbaa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z2tu_cbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:ruble-sign"} {...others} />);
}

export default Component;
