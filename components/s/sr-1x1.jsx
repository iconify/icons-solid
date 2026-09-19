import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmdjj56ue.css';
import '../../css/w/wwh205bot.css';
import '../../css/u/upfqz6b3a.css';
import '../../css/m/m7321gbhi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qmdjj56ue"/><path class="wwh205bot"/><path class="upfqz6b3a"/><path class="m7321gbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sr-1x1"} {...others} />);
}

export default Component;
