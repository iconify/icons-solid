import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m46zd30nf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m46zd30nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:hire-a-helper"} {...others} />);
}

export default Component;
