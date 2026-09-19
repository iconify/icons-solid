import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psh4icc1n.css';
import '../../css/u/uo6pjzbsg.css';
import '../../css/o/ozo3l73pu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="psh4icc1n"/><path class="uo6pjzbsg"/><path class="ozo3l73pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:auto-scroll"} {...others} />);
}

export default Component;
