import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f34s8ebdt.css';
import '../../css/y/yjtb2lbjg.css';
import '../../css/t/tld9dabbg.css';

const viewBox = {"width":163,"height":163};
const content = `<g class="ft5dv1b6b"><path class="f34s8ebdt"/><path class="yjtb2lbjg"/><path clip-rule="evenodd" class="tld9dabbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mantine"} {...others} />);
}

export default Component;
