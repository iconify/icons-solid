import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5qi_xc7l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c5qi_xc7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:circle-play"} {...others} />);
}

export default Component;
