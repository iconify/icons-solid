import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh4cx0b9t.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="sh4cx0b9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cloud-disconnect"} {...others} />);
}

export default Component;
