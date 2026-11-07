import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/ybg_29aft.css';
import '../../css/e/e0oiq1b4b.css';
import '../../css/w/w3j-z3ftz.css';
import '../../css/i/i4-0flbdu.css';
import '../../css/t/t3h20kb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="ybg_29aft"/><path class="e0oiq1b4b"/></g><path class="w3j-z3ftz"/><path class="i4-0flbdu"/><path class="t3h20kb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-bold-duotone"} {...others} />);
}

export default Component;
