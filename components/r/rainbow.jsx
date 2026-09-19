import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7kawomet.css';
import '../../css/n/nqy7aqnjg.css';
import '../../css/a/az2bevmsy.css';
import '../../css/n/nt-svsbtz.css';
import '../../css/e/edafvkbmx.css';
import '../../css/h/h63-hv8ip.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n7kawomet"/><path class="nqy7aqnjg"/><path class="az2bevmsy"/><path class="nt-svsbtz"/><path class="edafvkbmx"/><path class="h63-hv8ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rainbow"} {...others} />);
}

export default Component;
