import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0hb-y1ml.css';
import '../../css/d/dn9k9z1wr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0hb-y1ml"/><path class="dn9k9z1wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-timer"} {...others} />);
}

export default Component;
