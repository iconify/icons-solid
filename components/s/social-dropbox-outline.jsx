import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf4wyfbwq.css';
import '../../css/o/or5-kgblm.css';
import '../../css/q/qswqrgbaw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yf4wyfbwq"/><path class="or5-kgblm"/><path class="qswqrgbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-dropbox-outline"} {...others} />);
}

export default Component;
