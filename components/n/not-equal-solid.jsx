import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d95x-xrjv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d95x-xrjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:not-equal-solid"} {...others} />);
}

export default Component;
