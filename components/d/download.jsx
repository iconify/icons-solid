import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3b2fn1ti.css';
import '../../css/i/i_b6kebet.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="r3b2fn1ti"/><path class="i_b6kebet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:download"} {...others} />);
}

export default Component;
