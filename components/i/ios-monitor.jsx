import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5_4c5bns.css';
import '../../css/t/tvqwrac8d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c5_4c5bns"/><path class="tvqwrac8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-monitor"} {...others} />);
}

export default Component;
