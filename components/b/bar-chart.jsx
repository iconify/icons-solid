import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd1nwx7pc.css';
import '../../css/b/bp0flui-u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wd1nwx7pc"/><path class="bp0flui-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:bar-chart"} {...others} />);
}

export default Component;
