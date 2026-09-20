import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psii9s-rc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="psii9s-rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:valetudo-dark"} {...others} />);
}

export default Component;
