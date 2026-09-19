import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gln9e_ezj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gln9e_ezj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitelargesquare"} {...others} />);
}

export default Component;
