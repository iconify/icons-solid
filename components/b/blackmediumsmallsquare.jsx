import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0u060rxc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v0u060rxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackmediumsmallsquare"} {...others} />);
}

export default Component;
