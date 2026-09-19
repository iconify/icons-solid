import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9ifqu2ej.css';
import '../../css/y/yh79mabjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9ifqu2ej"/><path class="yh79mabjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:archive-arrow-down"} {...others} />);
}

export default Component;
