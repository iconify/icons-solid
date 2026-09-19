import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxvehrb0j.css';
import '../../css/h/h-13c9bbf.css';
import '../../css/r/r99w2lb9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oxvehrb0j"/><path class="h-13c9bbf"/><path class="r99w2lb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-codepen"} {...others} />);
}

export default Component;
