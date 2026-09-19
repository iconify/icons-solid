import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okamclltt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="okamclltt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:wordpress"} {...others} />);
}

export default Component;
