import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8fxli98z.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="x8fxli98z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:trend-downward-circle"} {...others} />);
}

export default Component;
