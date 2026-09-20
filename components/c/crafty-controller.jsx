import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e00xolbam.css';
import '../../css/x/xvaitzb7b.css';
import '../../css/x/xympf5b4o.css';
import '../../css/d/dikinyb7k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e00xolbam"/><path class="xvaitzb7b"/><path class="xympf5b4o"/><path class="dikinyb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crafty-controller"} {...others} />);
}

export default Component;
