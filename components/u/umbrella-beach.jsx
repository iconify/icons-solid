import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0py9l3oo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r0py9l3oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:umbrella-beach"} {...others} />);
}

export default Component;
