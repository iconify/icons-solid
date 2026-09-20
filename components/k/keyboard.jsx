import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1i1z-bbu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r1i1z-bbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:keyboard"} {...others} />);
}

export default Component;
