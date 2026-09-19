import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilj6i9a_i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ilj6i9a_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:regionalindicatori"} {...others} />);
}

export default Component;
