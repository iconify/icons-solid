import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf0bw4z3v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mf0bw4z3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:rupee-sign"} {...others} />);
}

export default Component;
