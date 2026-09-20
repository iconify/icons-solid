import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1hpn4bjj.css';
import '../../css/w/w_0godbis.css';
import '../../css/a/asyhpobbc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o1hpn4bjj"/><path class="w_0godbis"/><path class="asyhpobbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:fiscal-host-16"} {...others} />);
}

export default Component;
