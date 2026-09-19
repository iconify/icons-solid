import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzj803jut.css';
import '../../css/s/s4_r7ab8r.css';
import '../../css/n/nk949cczd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tzj803jut"/><path class="s4_r7ab8r"/><path class="nk949cczd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-ribbon"} {...others} />);
}

export default Component;
