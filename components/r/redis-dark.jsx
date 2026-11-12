import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni_g83x2x.css';
import '../../css/a/a4a1azmng.css';
import '../../css/g/g11ghhn1b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ni_g83x2x"/><path class="a4a1azmng"/><path class="g11ghhn1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:redis-dark"} {...others} />);
}

export default Component;
