import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icbjugb1y.css';
import '../../css/d/dv8e4qb1r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="icbjugb1y"/><path class="dv8e4qb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tubetimeout-dark"} {...others} />);
}

export default Component;
