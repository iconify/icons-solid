import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh5j6-3xb.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="sh5j6-3xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:align-justify"} {...others} />);
}

export default Component;
