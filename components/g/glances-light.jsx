import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd2jl2a8o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wd2jl2a8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:glances-light"} {...others} />);
}

export default Component;
