import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs8s6vbov.css';
import '../../css/a/a6q-egbcm.css';

const viewBox = {"width":13547,"height":4513};
const content = `<path class="bs8s6vbov"/><path class="a6q-egbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bybit"} {...others} />);
}

export default Component;
