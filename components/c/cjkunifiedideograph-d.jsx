import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffqc2rbjq.css';
import '../../css/k/kxplkmb3y.css';
import '../../css/l/l8iy2ebao.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ffqc2rbjq"/><path class="kxplkmb3y"/><path class="l8iy2ebao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cjkunifiedideograph-d"} {...others} />);
}

export default Component;
