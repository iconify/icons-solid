import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0biy3-1k.css';
import '../../css/z/z9thu7bwc.css';
import '../../css/c/ccn922z7i.css';
import '../../css/u/uk7m8-rvq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t0biy3-1k"/><path class="z9thu7bwc"/><path class="ccn922z7i"/><path class="uk7m8-rvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:battery-working"} {...others} />);
}

export default Component;
