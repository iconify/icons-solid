import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rexw2ywar.css';
import '../../css/s/sf5m5dbrb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rexw2ywar"/><path class="sf5m5dbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:verdaccio-dark"} {...others} />);
}

export default Component;
