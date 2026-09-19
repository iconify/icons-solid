import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0eo731hg.css';
import '../../css/m/mwt8libml.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y0eo731hg"/><path class="mwt8libml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:alienmonster"} {...others} />);
}

export default Component;
