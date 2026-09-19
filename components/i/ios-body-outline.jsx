import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyglj2bnx.css';
import '../../css/d/dkassfuyo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qyglj2bnx"/><path class="dkassfuyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-body-outline"} {...others} />);
}

export default Component;
