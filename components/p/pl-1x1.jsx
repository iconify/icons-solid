import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/de5y7ab3j.css';
import '../../css/y/yhd-geb2e.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="de5y7ab3j"/><path class="yhd-geb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pl-1x1"} {...others} />);
}

export default Component;
