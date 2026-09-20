import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t69nwwbts.css';
import '../../css/d/dv8e4qb1r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t69nwwbts"/><path class="dv8e4qb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tubetimeout"} {...others} />);
}

export default Component;
