import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd0qpkb5y.css';
import '../../css/y/y18qkbg3r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nd0qpkb5y"/><path class="y18qkbg3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-locker-dark"} {...others} />);
}

export default Component;
