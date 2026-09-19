import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0tnlimht.css';
import '../../css/x/xc9imsb1x.css';
import '../../css/f/f_84nivhg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s0tnlimht"/><path class="xc9imsb1x"/><path class="f_84nivhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:zil"} {...others} />);
}

export default Component;
