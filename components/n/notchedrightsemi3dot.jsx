import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8goy05sw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y8goy05sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:notchedrightsemi3dot"} {...others} />);
}

export default Component;
