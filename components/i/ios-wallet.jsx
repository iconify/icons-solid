import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wejjyi8fq.css';
import '../../css/i/im3c3rjxf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wejjyi8fq"/><path class="im3c3rjxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-wallet"} {...others} />);
}

export default Component;
