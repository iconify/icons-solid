import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/albryfbqk.css';
import '../../css/g/g0ke4nyhw.css';
import '../../css/r/rp0c_5bbk.css';

const viewBox = {"width":500,"height":500};
const content = `<path class="albryfbqk"/><path class="g0ke4nyhw"/><path class="rp0c_5bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-watchdog"} {...others} />);
}

export default Component;
