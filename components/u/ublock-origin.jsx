import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn_etb2ed.css';
import '../../css/a/aoms7-zgq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xn_etb2ed"/><path class="aoms7-zgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ublock-origin"} {...others} />);
}

export default Component;
