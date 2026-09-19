import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8sxkwuez.css';
import '../../css/q/qrooeccgx.css';
import '../../css/w/wq2z_ybbr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s8sxkwuez"/><path class="qrooeccgx"/><path class="wq2z_ybbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ogre"} {...others} />);
}

export default Component;
