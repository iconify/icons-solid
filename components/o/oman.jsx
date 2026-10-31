import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqwhos75l.css';
import '../../css/a/alqkqccyy.css';
import '../../css/i/i2wpqi2td.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="rqwhos75l"/><path class="alqkqccyy"/><path class="i2wpqi2td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:oman"} {...others} />);
}

export default Component;
