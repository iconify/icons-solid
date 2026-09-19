import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo1f16ahm.css';

const viewBox = {"width":897,"height":1024};
const content = `<path class="yo1f16ahm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:moleskine"} {...others} />);
}

export default Component;
