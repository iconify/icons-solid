import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t02myt54b.css';
import '../../css/n/nco21hbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t02myt54b"/><path class="nco21hbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-tachometer"} {...others} />);
}

export default Component;
