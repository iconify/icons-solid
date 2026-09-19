import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmy-rlt6c.css';
import '../../css/l/l144cxb6j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xmy-rlt6c"/><path class="l144cxb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-game-controller-b"} {...others} />);
}

export default Component;
