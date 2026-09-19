import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp8eo214r.css';
import '../../css/g/gjjbcefqf.css';
import '../../css/a/a4rohjb8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lp8eo214r"/><path class="gjjbcefqf"/><path class="a4rohjb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rightspeaker3soundwaves"} {...others} />);
}

export default Component;
