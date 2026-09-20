import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntpbjnfmw.css';
import '../../css/y/y8ecny4xo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ntpbjnfmw"/><path class="y8ecny4xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:invert"} {...others} />);
}

export default Component;
