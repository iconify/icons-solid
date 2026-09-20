import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzo-h1bfn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dzo-h1bfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:coins"} {...others} />);
}

export default Component;
