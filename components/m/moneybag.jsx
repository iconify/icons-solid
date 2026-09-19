import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxnzi-byq.css';
import '../../css/d/dmwskda3p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wxnzi-byq"/><path class="dmwskda3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:moneybag"} {...others} />);
}

export default Component;
