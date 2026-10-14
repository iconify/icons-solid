import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sxnyd4ewi.css';
import '../../css/b/b-p73fn2z.css';
import '../../css/v/v7tp-zgpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="sxnyd4ewi"/><path class="b-p73fn2z"/><path class="v7tp-zgpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:globe"} {...others} />);
}

export default Component;
