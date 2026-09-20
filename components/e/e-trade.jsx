import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zykmcsy6u.css';
import '../../css/c/cf4rmeasd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zykmcsy6u"/><path class="cf4rmeasd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:e-trade"} {...others} />);
}

export default Component;
