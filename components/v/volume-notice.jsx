import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g9w75jc3n.css';
import '../../css/y/yqxucbc0n.css';
import '../../css/m/m4wir9t-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="g9w75jc3n"/><path class="yqxucbc0n"/><path class="m4wir9t-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:volume-notice"} {...others} />);
}

export default Component;
