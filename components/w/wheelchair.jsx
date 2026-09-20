import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae2ur5upl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ae2ur5upl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:wheelchair"} {...others} />);
}

export default Component;
