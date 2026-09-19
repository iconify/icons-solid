import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o43zpgbqc.css';
import '../../css/w/w5cu6gb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o43zpgbqc"/><path class="w5cu6gb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-receipt"} {...others} />);
}

export default Component;
