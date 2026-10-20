import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7qjasj9f.css';
import '../../css/y/y8x22khvr.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l7qjasj9f"/><path class="y8x22khvr"/><path class="sh06c0bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-check-20-bold"} {...others} />);
}

export default Component;
