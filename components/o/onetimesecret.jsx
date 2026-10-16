import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v22tdl34m.css';
import '../../css/x/xn2g6_jxx.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="v22tdl34m"/><path class="xn2g6_jxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:onetimesecret"} {...others} />);
}

export default Component;
